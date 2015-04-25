/**
 * @object
 * @version 1.1.0
 * @author nate-wilkins <nwilkins2012@gmail.com> (https://github.com/nate-wilkins)
 * @license MIT (c) 2014
 *
 * @description
 * ESLint plugin rules
 */
'use strict';

var requireDirectory = require('require-directory');

module.exports = {
	rules: requireDirectory(module),
	rulesConfig: {
		'exclude': 2,
		'focus': 2
	}
};
