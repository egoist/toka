var Config = require('myconf');
var Download = require('download');
var path = require('path');

module.exports = function (options) {
  var config = new Config('.tokaconfig');
  if (options.name) {
    // down from url and save as name
    var url = options._[1];
    var name = options.name;
    config
      .set(name, url)
      .then(function () {
        console.log(name.cyan, 'is saved to your config file!'.green);
      })
  } else {
    // fetch url from config file by name
    var name = options._[1];
    config
      .get()
      .then(function (data) {
        data = JSON.parse(data)
        new Download({mode: '755'})
          .get(data[name])
          .dest(process.cwd())
          .run();
      })

  }
}
