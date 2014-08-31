/**
 * @gulpfile
 * @author nate-wilkins <nwilkins2012@gmail.com> (https://github.com/nate-wilkins)
 * @license MIT (c) 2014
 *
 * @description
 * Loads all the build tasks for this project with the desired configuration
 */
'use strict';

require('./build/tasks')({
	cwd: "./build",

	eslintrc: "./../.eslintrc",

	source: {
		files: ["./../src/**/*.js"]
	},

	test: {
		files: ["./specs/**/*-spec.js", "./specs/runner.js"],
		reporter: 'spec'
	}
});
