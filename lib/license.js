var fs = require('fs');

var hb = require('handlebars'),
    ini = require('ini');
var home = require('user-home');
var path = require('path');
var config, file, tpl, output, data = {};
var licenses = [
  'Apache-2.0',
  'BSD-2',
  'BSD-3',
  'GPL-2.0',
  'ISC',
  'MIT',
  'MPL-2.0',
  'WTF',
  'SOX'
];


module.exports = function (options) {
  var license = options._[1];
  if (!license) {
    log.error('You have to specific a license name');
    return;
  }
  for (var i = 0; i < licenses.length; i++) {
    var l = licenses[i];
    if (require('./helper').fuzzy(l, license)) {
      license = l;
      log.info(`Detected as ${l} license...`)
      break;
    }
  }
  var check = require('./helper').checkInArray(licenses, license);
  if (!check) {
    log.error('We don\' support that type of LICENSE, sorry');
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
    OWNER: config.user.name + ' ' + config.user.email
  }

  output = tpl(data);
  fs.writeFileSync(process.cwd() + '/LICENSE', output, 'utf-8');
  log.success(license + ' license is saved to your project!');
}
