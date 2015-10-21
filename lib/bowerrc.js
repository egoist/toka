var fs = require('fs');
var path = require('path');

module.exports = function (options) {
  var lib = options._[1];
  lib = lib || 'lib';
  var json = {
    "directory": lib
  };
  json = JSON.stringify(json, undefined, 2);
  fs.writeFile(path.join(process.cwd(), options.dir || '', '.bowerrc'), json, function (err) {
    if (err) throw err;
    console.log('The .bowerrc file is saved!'.green);
  });
}
