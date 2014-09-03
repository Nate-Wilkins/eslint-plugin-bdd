/**
 * @global iit
 * @global ddescribe
 * @global describe
 * @global it
 * @global expect
 *
 * @global describeAnimal
 * @global describePlanet
 *
 * @error Exclude.ToHaveNone@CallExpression
 * @error Exclude.ToHaveNone@CallExpression
 *
 * @description:
 * Tests to see if there are any empty `describeXYZ` tests
 */
'use strict';

(function (root) {
	describeAnimal('giraffe');

	describePlanet('jupiter');
}(this));
