var hb = require('handlebars');
var fs = require('fs');
var path = require('path');

module.exports = function (options) {
  var entry = options.entry || options.e;
  var webpackPath = options.path || options.p;
  var filename = options.filename || options.f;
  var string = fs.readFileSync(__dirname + '/webpack/config.js').toString('utf8');
  var tpl = hb.compile(string);
  var output = tpl({
    entry: entry,
    path: webpackPath,
    filename: filename
  })
  fs.writeFileSync(path.join(process.cwd(), options.dir || '', 'webpack.config.js'), output, 'utf-8');
  console.log('Successfully added webpack.config.js to your project!'.green);
}
