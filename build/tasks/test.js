/**
 * @function
 * @author nate-wilkins <nwilkins2012@gmail.com> (https://github.com/nate-wilkins)
 * @license MIT (c) 2014
 *
 * @description
 * Configures the `test` build task
 */
'use strict';

var gulp = require('gulp'),
	mocha = require('gulp-mocha');

module.exports = function (config) {
	gulp.task('test', ['lint'], function () {
		return gulp.src(config.test.files, { read: false })
			.pipe(mocha({
				reporter: config.test.reporter
			}));
	});
};
