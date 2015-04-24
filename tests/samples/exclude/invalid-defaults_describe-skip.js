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
 * Tests to see if there are any `describe.skip` tests
 */
'use strict';

(function (root) {
	describe.skip('something', function () {
		it('should do stuff', function () {

		});
	});
}(this));
