'use strict'

/**
 * Module dependencies
 */
const pkg = require('../package')

const routes = [
	'gitignore, gi, ig, g',
	'license, li, l',
	'readme, re, r'
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
		// print help when no commands input
		if (!command) {
			// print version if no command but has argv -v/--version
			if (this.flags.v || this.flags.version) {
				return console.log(pkg.version)
			}
			this.help()
		}
		for (let route of routes) {
			if (route.indexOf(command) > -1) {
				require(`./routes/${route[0]}`).call(this)
			}
		}
	}
	help() {
		const help = `
  toka ~ ${pkg.version.cyan}

    gitignore/gi/ig/g ${'[languages]'.gray}:  generate a gitignore file
		`

		console.log(help)
	}
}

/**
 * A function that return an App instance
 */
module.exports = function app(argv) {
	return new App(argv)
}
