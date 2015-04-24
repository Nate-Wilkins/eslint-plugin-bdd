/**
 * @script
 * @author nate-wilkins <nwilkins2012@gmail.com> (https://github.com/nate-wilkins)
 * @license MIT (c) 2014
 *
 * @description
 * Runs the ESLint tester over the loaded notated test fixtures
 */
'use strict';

require('eslint-tool-test-files').describePlugin('eslint-plugin-bdd', './src/rules', [
	'./tests/samples/**/*.js'
], require('./../src/errors'));
