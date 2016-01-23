'use strict'

/**
 * A function that return an App instance
 */
module.exports = function app(argv) {
  return new App(argv)
}

const routes = [
  'gitignore, gi, ig',
  'license, l',
  'readme, r'
].map(n => n
  .split(',')
  .map(m => m.trim())
)

/**
 * App constrcutor
 *
 * @param {Object} - Cli arguments parsed by minimist
 */
class App {
  constructor(argv) {
    this.input = argv._
    delete argv._
    this.flags = argv
    this.direct()
  }
  direct() {
    const command = this.input[0]
    for (let route of routes) {
      if (route.indexOf(command) > -1) {
        require(`./routes/${route[0]}`).call(this)
      }
    }
  }
}
