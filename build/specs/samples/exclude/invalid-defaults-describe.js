/**
 * @global iit
 * @global ddescribe
 * @global describe
 * @global it
 * @global expect
 *
 * @error Exclude.ToHaveNone@CallExpression
 *
 * @description:
 * Tests to see if there are any empty `describe` tests
 */
'use strict';

(function (root) {
	describe('something');
}(this));
