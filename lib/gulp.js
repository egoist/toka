var hb = require('handlebars');
var fs = require('fs');

module.exports = function (options) {
  var gulpfile = (options.babel || options.b) ? 'gulpfile.babel.js' : 'gulpfile.js';
  var string = fs.readFileSync(__dirname + '/gulp/' + gulpfile).toString('utf8');
  var tpl = hb.compile(string);
  var output = tpl({})
  fs.writeFileSync(process.cwd() + '/' + gulpfile, output, 'utf-8');
  console.log('Successfully added %s to your project!'.green, gulpfile);
}
