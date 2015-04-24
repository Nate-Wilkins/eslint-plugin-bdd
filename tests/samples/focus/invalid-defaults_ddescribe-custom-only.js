/**
 * @global iit
 * @global ddescribe
 * @global describe
 * @global it
 * @global expect
 *
 * @global describeAnimal
 *
 * @error Focus.ToHaveNone@MemberExpression
 *
 * @description:
 * Tests to see if there are any `describeXYZ.only` tests
 */
'use strict';

(function (root) {
	describeAnimal.only('tiger', function () {
		it('should do stuff', function () {

		});
	});
}(this));
