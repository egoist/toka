var fs = require('fs');
var path = require('path');
var userHome = require('user-home');
var temp_langs = require('./list/gitignore').langs();
var langs = [];
for (var i = 0; i < temp_langs.length; i++) {
    langs.push(temp_langs[i].toLowerCase());
}
langs.sort();

var notFound = function () {
    log.error('We don\' support that type of language, sorry');
    console.log('see USAGE:');
    console.log('    $ '.cyan + 'toka .gitignore <LANGUAGE NAME>');
    console.log('\nwhat we support:');
      var output = '';
      var c_langs = langs.slice(0);
      for (var index in c_langs) {
        var order = parseInt(index) + 1,
            prefix = '[' + index + '] ',
            main = prefix.cyan + c_langs[index];
        if (order % 3 == 0)
          c_langs[index] = main.substring(0, 36) + '\n';
        else {
          c_langs[index] = main + '                      ';
          c_langs[index] = c_langs[index].substring(0, 36)
        }

        output += c_langs[index];

      }
      console.log(output);
}

module.exports = function (options) {

  var language = options._[1] ? options._[1].split(',') : '';
  if (options.d || options.default) language = ['Default'];
  if (!language) {

      notFound();

  } else {
        var all = '';
        for (var index in language) {
          var order = parseInt(index);
          var lang = language[index].toLowerCase();
          var check = require('./helper').checkInArray(langs, lang);
          if (!check) {
            var guess = '';
            for (var i = 0; i < langs.length; i++) {
              if (require('./helper').fuzzy(langs[i], lang)) {
                guess = langs[i];
              }
            }
            notFound();
            console.log('');
            console.log('        Do you mean %s ?'.cyan, guess);
            return;
          }
          var file = fs.readFileSync(__dirname + '/gitignore/' + lang + '.gitignore').toString('utf8');
          all += file;

        }
        var dir = (options.g || options.global)
        ? userHome + '/.gitignore_global'
        : (path.join(process.cwd(), options.dir || '') + '/.gitignore');
        var where = (options.g || options.global) ? ' globally' : '';
        if (options.a || options.append) {
          fs.appendFileSync(dir, all, 'utf-8');
          log.success(`${language.toString()} has been append to .gitignore ${where}!`);
        } else {
          fs.writeFileSync(dir, all, 'utf-8');
          log.success(`The .gitignore file for your ${language.toString()} project is saved ${where}!`);
        }
  }
}
