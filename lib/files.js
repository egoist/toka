var gitignore = require('./gitignore'),
    bowerrc = require('./bowerrc'),
    webpack = require('./webpack'),
    gulp = require('./gulp'),
    license = require('./license');

exports.search = function (options) {
  var filename = options._[0];
  switch (filename) {
    case '-v':
      console.log('toka ~ ' + require('../package').version.green);
      break;
    case　'g':
    case 'git':
    case '.gitignore':
      gitignore(options);
      break;
    case 'b':
    case '.bowerrc':
      bowerrc(options);
      break;
    case 'l':
    case 'license':
      license(options);
      break;
    case 'w':
    case 'webpack':
      webpack(options);
      break;
    case 'gu':
    case 'gulp':
      gulp(options);
      break;
    default:
      return;
  }

}
