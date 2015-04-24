/**
 * @function
 * @author nate-wilkins <nwilkins2012@gmail.com> (https://github.com/nate-wilkins)
 * @license MIT (c) 2014
 *
 * @description
 * Configures the `lint` build task
 */
'use strict';

var eslint = require('gulp-eslint');

module.exports = function (gulp, config) {
	gulp.task('lint', 'Lint all Javascript files', function () {
		gulp.src([].concat(config.src.files, config.tests.files.runner))
			.pipe(eslint(config.files.eslintrc))
			.pipe(eslint.formatEach('stylish', process.stderr));
	});
};
