var files = require('./lib/files');

module.exports = function(argv) {
  var options = argv;
  files.search(options);
}