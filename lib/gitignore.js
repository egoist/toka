var fs = require('fs');
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
  if (!options[1]) {
    notFound();
    return;
  }
  var language = options[1].split(','),
      temp = options.slice(),
      last = temp.pop();
  if (last == '-d') language = ['Default'];
  if (!language) {

      notFound();

  } else {
        var all = '';
        for (var index in language) {
          var order = parseInt(index);
          var lang = language[index].toLowerCase();
          var check = require('./helper').checkInArray(langs, lang);
          if (!check) {
            notFound();
            return;
          }
          var file = fs.readFileSync(__dirname + '/gitignore/' + lang + '.gitignore').toString('utf8');
          all += file;

        }
        if (last == '-a') {
          fs.appendFileSync(process.cwd() + '/.gitignore', all, 'utf-8');
          console.log('%s has been append to .gitignore!'.green, language.toString());
        } else {
          fs.writeFileSync(process.cwd() + '/.gitignore', all, 'utf-8');
          console.log('The .gitignore file for your %s project is saved!'.green, language.toString());
        }
        
        
        
  }

}