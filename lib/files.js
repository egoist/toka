var gitignore = require('./gitignore'),
    bowerrc = require('./bowerrc'),
    webpack = require('./webpack'),
    gulp = require('./gulp'),
    download = require('./download'),
    run = require('./run'),
    license = require('./license');

exports.search = function (options) {

  if (options.v || options.version) {
    console.log('toka ~ ' + require('../package').version.green);
    return;
  }

  var filename = options._[0];
  switch (filename) {
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
    case 'd':
    case 'dl':
    case 'download':
      download(options);
    case 'r':
    case 'run':
      run(options);
    default:
      return;
  }

}
