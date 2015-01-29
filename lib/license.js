var fs = require('fs');

var hb = require('handlebars'),
    ini = require('ini');
var home = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var config, file, tpl, output, data = {};
var licenses = [
  'Apache-2.0',
  'BSD-2',
  'BSD-3',
  'GPL-2.0',
  'ISC',
  'MIT',
  'MPL-2.0',
  'WTF'
];


var htmldecode = function (str) {
    str= str.replace(/&lt;/g, "<");
    str= str.replace(/&gt;/g, ">");
    str= str.replace(/&nbsp;/g, " ");
    str= str.replace(/&quot;/g, "\"");
    str= str.replace(/<br>/g, "\n");
    str= str.replace(/&raquo;/g, "");
    str= str.replace(/&amp;/g, "");

  return str;
}

module.exports = function (license) {
  var check = require('./helper').checkInArray(licenses, license);
  if (!check) {
    console.log('We don\' support that type of LICENSE, sorry'.red);
    console.log('see USAGE:');
    console.log('    $ '.cyan + 'toka license <LICENSE NAME>');
    console.log('\nwhat we support:');
    console.log(licenses.toString().magenta);
    return;
  }
  config = ini.parse(fs.readFileSync(home + '/.gitconfig', 'utf-8'))

  file = fs.readFileSync(__dirname + '/license/' + license + '.txt').toString('utf8');
  tpl = hb.compile(file);
  data = {
    YEAR: new Date().getFullYear(),
    OWNER: config.user.name + ' <' + config.user.email + '>'
  }

  output = htmldecode(tpl(data));
  fs.writeFileSync(process.cwd() + '/LICENSE', output, 'utf-8');
  console.log(license.green + ' license is saved yo your project!'.green);
}