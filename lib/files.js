var gitignore = require('./gitignore'),
    bowerrc = require('./bowerrc'),
    license = require('./license');

exports.search = function (options) {
  
  switch (filename) {
    case '-v':
      console.log('toka ~ ' + require('../package').version.green);
      break;
    case '.gitignore':
      gitignore(options);
      break;
    case '.bowerrc':
      bowerrc(options);
      break;
    case 'license':
      license(options);
      break;
    default:
      gitignore();
  }

}