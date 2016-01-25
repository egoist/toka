'use strict'

/**
 * Module dependencies
 */
const log = require('../log')

module.exports = function () {
	const languages = this.input[1] && this.input[1].split(',')
	if (!languages || languages.length === 0) {
		log.error('Please input at least one language!')
	}
	console.log(languages)
}
