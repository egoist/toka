var fs = require('fs');
var prompt = require('prompt');
var request = require('request');
var langs = require('./list/gitignore').langs();
var schema = {
    properties: {
      number: {
        description: 'Choose a language',
        pattern: /^\d+$/,
        message: 'Just input a number to choose its mapping language, Ctrl+D to exit',
        required: true
      }
    }
  };


module.exports = function (language) {
  if (language == '-d') language = 'Default';
  var check = require('./helper').checkInArray(langs, language);
  if (!check || !language) {
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

      prompt.start();

      prompt.get(schema, function (err, result) {

        var raw =  'https://raw.githubusercontent.com/0x142857/gitignore/master/' + langs[result.number] + '.gitignore';
        request(raw, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            fs.writeFile(process.cwd() + '/.gitignore', body, function (err) {
              if (err) throw err;
              console.log('The .gitignore file for your %s project is saved!'.green, langs[result.number]);
            });
          }
        })

      });
  } else if(check) {
        var raw =  'https://raw.githubusercontent.com/0x142857/gitignore/master/' + language + '.gitignore';
        request(raw, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            fs.writeFile(process.cwd() + '/.gitignore', body, function (err) {
              if (err) throw err;
              console.log('The .gitignore file for your %s project is saved!'.green, language);
            });
          }
        })
  }

}