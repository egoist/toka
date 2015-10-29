var Config = require('myconf');
var Download = require('download');
var progress = require('download-status');
var path = require('path');

module.exports = function(options) {
  var config = new Config('.tokaconfig');
  if (options.name) {
    // down from url and save as name
    var url = options._[1];
    var name = options.name;
    config
      .set(name, url)
      .then(function() {
        log.success(name.cyan, 'is saved to your config file!');
      })
  } else {
    // fetch url from config file by name
    var name = options._[1];
    var urlRe = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
    if (urlRe.test(name)) {
      download(name)
        .then(function () {
          log.success('Saved to current dir!');
        })
        .catch(function (err) {
          log.error(err)
        })
    } else {
      config
        .get(name)
        .then(function(url) {
          download(url)
            .then(function () {
              log.success(name.cyan, 'is saved to current dir!');
            })
            .catch(function (err) {
              log.error(err)
            })
        })
    }
  }
}

function download (url) {
  return new Promise(function (resolve, reject) {
    new Download({
          mode: '755'
    })
      .use(progress())
      .get(url)
      .dest(process.cwd())
      .run(function (err, files) {
        if (!err) {
          resolve(files)
        } else {
          reject(err)
        }
      });
  })

}
