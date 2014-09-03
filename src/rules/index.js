/**
 * @object
 * @version 1.0.0
 * @author nate-wilkins <nwilkins2012@gmail.com> (https://github.com/nate-wilkins)
 * @license MIT (c) 2014
 *
 * @description
 * ESLint plugin rules
 */
'use strict';

var fs = require('fs'),
	path = require('path');

fs.readdirSync(__dirname).forEach(function (file) {
	if (file === 'index.js') { return; }
	module.exports[path.basename(file, 'js')] = require('./' + file);
});
