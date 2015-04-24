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
 * Tests to see if there are any `it.only` tests
 */
'use strict';

(function (root) {
	describe('something', function () {
		it.only('should do stuff', function () {

		});
	});
}(this));
