exports.error = function () {
	console.log.apply(this, [].map.call(arguments, val => val.red))
	process.exit()
}
