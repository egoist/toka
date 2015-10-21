module.exports = function (options) {
  if (options.name) {
    // down from url and save as name
    var url = options._[0]
    var name = options.name
  } else {
    // fetch url from config file by name
    var name = options._[0]
  }
}
