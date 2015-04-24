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
 * Tests to see if there are any empty `it` tests
 */
'use strict';

(function (root) {
	describe('something', function () {
		it('should do stuff');
	});
}(this));
