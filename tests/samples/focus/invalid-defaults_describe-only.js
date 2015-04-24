/**
 * @global iit
 * @global ddescribe
 * @global describe
 * @global it
 * @global expect
 *
 * @error Focus.ToHaveNone@MemberExpression
 *
 * @description:
 * Tests to see if there are any `describe.only` tests
 */
'use strict';

(function (root) {
	describe.only('something', function () {
		it('should do stuff', function () {

		});
	});
}(this));
