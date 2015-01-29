var gitignore = require('./gitignore'),
    bowerrc = require('./bowerrc'),
    license = require('./license');

exports.search = function (options) {
  var filename = options[0];
  var second = options[1];
  switch (filename) {
    case '-v':
      console.log('toka ~ ' + require('../package').version.green);
      break;
    case '.gitignore':
      gitignore(second);
      break;
    case '.bowerrc':
      bowerrc(second);
      break;
    case 'license':
      license(second);
      break;
    default:
      gitignore();
  }

}