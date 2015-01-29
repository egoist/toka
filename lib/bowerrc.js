var fs = require('fs');

module.exports = function (lib) {
  lib = lib || 'lib';
  var json = {
    "directory": lib
  };
  json = JSON.stringify(json, undefined, 2);
  fs.writeFile(process.cwd() + '/.bowerrc', json, function (err) {
    if (err) throw err;
    console.log('The .bowerrc file is saved!'.green);
  });
}