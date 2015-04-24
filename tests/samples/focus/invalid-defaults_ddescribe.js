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
 * Tests to see if there are any `ddescribe` focus tests
 */
'use strict';

(function (root) {
	ddescribe('something', function () {
		it('should do stuff', function () {
			expect(true).toBe(true);
		});
	});
}(this));
