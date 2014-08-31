/**
 * @function
 * @author nate-wilkins <nwilkins2012@gmail.com> (https://github.com/nate-wilkins)
 * @license MIT (c) 2014
 *
 * @description
 * Configures the `lint` build task
 */
'use strict';

var gulp = require('gulp'),
	eslint = require('gulp-eslint');

module.exports = function (config) {
	gulp.task('lint', function () {
		gulp.src(config.source.files)
			.pipe(eslint(config.eslintrc))
			.pipe(eslint.format());
	});
};
