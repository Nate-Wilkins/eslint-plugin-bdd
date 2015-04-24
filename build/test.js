/**
 * @function
 * @author nate-wilkins <nwilkins2012@gmail.com> (https://github.com/nate-wilkins)
 * @license MIT (c) 2014
 *
 * @description
 * Configures the `test` build task
 */
'use strict';

var mocha = require('gulp-mocha');

module.exports = function (gulp, config) {
	gulp.task('test', ['lint'], function () {
		return gulp.src(config.tests.files.runner, { read: false })
			.pipe(mocha({
				reporter: config.tests.reporter
			}));
	});
};
