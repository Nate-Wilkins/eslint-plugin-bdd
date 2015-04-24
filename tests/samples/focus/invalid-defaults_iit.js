/**
 * @global iit
 * @global ddescribe
 * @global describe
 * @global it
 * @global expect
 *
 * @error Focus.ToHaveNone@Identifier
 *
 * @description:
 * Tests to see if there are any `iit` focus tests
 */
'use strict';

(function (root) {
	describe('something', function () {
		iit('should do stuff', function () {
			expect(true).toBe(true);
		});
	});
}(this));
