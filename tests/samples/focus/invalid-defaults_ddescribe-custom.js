/**
 * @global iit
 * @global ddescribe
 * @global describe
 * @global it
 * @global expect
 *
 * @global ddescribeAnimal
 *
 * @error Focus.ToHaveNone@Identifier
 *
 * @description:
 * Tests to see if there are any `ddescribeXYZ` focus tests
 */
'use strict';

(function (root) {
	ddescribeAnimal('something', function () {
		it('should do stuff', function () {
			expect(true).toBe(true);
		});
	});
}(this));
