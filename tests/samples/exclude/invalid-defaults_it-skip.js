/**
 * @global iit
 * @global ddescribe
 * @global describe
 * @global it
 * @global expect
 *
 * @error Exclude.ToHaveNone@MemberExpression
 *
 * @description:
 * Tests to see if there are any `it.skip` tests
 */
'use strict';

(function (root) {
	describe('something', function () {
		it.skip('should do stuff', function () {

		});
	});
}(this));
