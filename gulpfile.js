/**
 * @gulpfile
 * @author nate-wilkins <nwilkins2012@gmail.com> (https://github.com/nate-wilkins)
 * @license MIT (c) 2014
 *
 * @description
 * Loads all the build tasks for this project with the desired configuration
 */
'use strict';

require('./build')(require('gulp'), {
	path: '.',

	files: {
		all: [
			'<%= config.path %>/**/*'
		],

		js: [
			'<%= config.path %>/**/*.js',
			'!./node_modules/**'
		],

		eslintrc: '<%= config.path %>/.eslintrc'
	},

	src: {
		path: '<%= config.path %>/src',

		files: [
			'<%= src.path %>/**/*'
		]
	},

	tests: {
		path: '<%= config.path %>/tests',

		files: {
			all: [
				'<%= tests.path %>/**/*'
			],

			runner: '<%= tests.path %>/runner.js'
		},

		reporter: 'spec'
	}
});
