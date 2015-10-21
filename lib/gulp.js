var hb = require('handlebars');
var fs = require('fs');
var path = require('path')

module.exports = function (options) {
  var gulpfile = (options.babel || options.b) ? 'gulpfile.babel.js' : 'gulpfile.js';
  var string = fs.readFileSync(__dirname + '/gulp/' + gulpfile).toString('utf8');
  var tpl = hb.compile(string);
  var output = tpl({})
  var dir = path.join(process.cwd(), options.dir || '', gulpfile)
  fs.writeFileSync(dir, output, 'utf-8');
  console.log('Successfully added %s to your project!'.green, gulpfile);
}
