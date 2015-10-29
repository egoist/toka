var fs = require('fs')

module.exports = function (options) {
  var holder = '${message}'
  var data = `task.add('', () => {

})

task.add('git', () => {
  var message = argv._[1] || 'update'
  exec('git add -A')
  exec(\`git commit -m "${holder}"\`)
  exec('git push origin master')
})
  `
  fs.writeFileSync(process.cwd() + '/Runfile', data, 'utf-8')
  log.success('Runfile is saved to your current path!')
}
