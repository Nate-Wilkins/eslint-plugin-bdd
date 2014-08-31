/**
 * @function
 * @author nate-wilkins <nwilkins2012@gmail.com> (https://github.com/nate-wilkins)
 * @license MIT (c) 2014
 *
 * @description
 * Configures the `default` build task
 */
'use strict';

var gulp = require('gulp');

module.exports = function (config) {
	gulp.task('default', ['test', 'lint']);
};
