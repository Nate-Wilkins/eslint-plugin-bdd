/**
 * @function task-loader
 * @author nate-wilkins <nwilkins2012@gmail.com> (https://github.com/nate-wilkins)
 * @license MIT (c) 2014
 *
 * @description
 * Loads build tasks with the provided configuration
 */

// todo: put in common repo, publish to npm if common pattern

var fs = require('fs');

module.exports = function (config) {
	if (config.cwd) { process.chdir(config.cwd); }

	fs.readdirSync(__dirname).forEach(function (file) {
		if (file === 'index.js') { return; }
		var loadTask = require("./" + file);
		loadTask(config);
	});
};
