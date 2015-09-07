var fs = require('fs');
var homeDir = require('home-dir');
var temp_langs = require('./list/gitignore').langs();
var langs = [];
for (var i = 0; i < temp_langs.length; i++) {
    langs.push(temp_langs[i].toLowerCase());
}
langs.sort();

var notFound = function () {
    console.log('We don\' support that type of language, sorry'.red);
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
        var dir = (options.g || options.global) ? homeDir('/.gitignore_global') : (process.cwd() + '/.gitignore');
        var where = (options.g || options.global) ? ' globally' : '';
        if (options.a || options.append) {
          fs.appendFileSync(dir, all, 'utf-8');
          console.log('%s has been append to .gitignore%s!'.green, language.toString(), where);
        } else {
          fs.writeFileSync(dir, all, 'utf-8');
          console.log('The .gitignore file for your %s project is saved%s!'.green, language.toString(), where);
        }
  }
}
