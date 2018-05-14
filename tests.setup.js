/**
 * Setup environment variables to make
 * local environment test to pass
 */
module.exports = function setup () {
	process.env.PORT = process.env.PORT || 3001
	process.env.DEBUG = 'dp:*'
	process.env.DEBUG_COLORS = true
	process.env.NODE_ENV = 'test'
}
