const directions = require('directions')
const opposites = {
	left: 'right',
	up: 'down',
	right: 'left',
	down: 'up'
}

exports.values = Object.keys(directions)
exports.resolve = resolve
exports.opposite = opposite

function resolve(direction) {
	return directions[direction]
}

function opposite(direction) {
	return opposites[direction]
}
