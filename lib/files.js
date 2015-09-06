var gitignore = require('./gitignore'),
    bowerrc = require('./bowerrc'),
    license = require('./license');

exports.search = function (options) {
  var filename = options[0];
  switch (filename) {
    case '-v':
      console.log('toka ~ ' + require('../package').version.green);
      break;
    case　'g':
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
    default:
      return;
  }

}
