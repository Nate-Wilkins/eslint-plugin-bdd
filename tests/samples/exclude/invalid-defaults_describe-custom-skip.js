/**
 * @global iit
 * @global ddescribe
 * @global describe
 * @global it
 * @global expect
 *
 * @global describeAnimal
 *
 * @error Exclude.ToHaveNone@MemberExpression
 *
 * @description:
 * Tests to see if there are any `describeXYZ.skip` tests
 */
'use strict';

(function (root) {
	describeAnimal.skip('lion', function () {
		it('should do stuff', function () {

		});
	});
}(this));
