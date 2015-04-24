/**
 * @eslint-rule
 * @author nate-wilkins <nwilkins2012@gmail.com> (https://github.com/nate-wilkins)
 * @license MIT (c) 2014
 *
 * @description
 * Rule to determine if focus tests are used
 */
'use strict';

var Errors = require('./../errors').Focus,
	Common = require('./../common');

/**
 *
 * @type {exports}
 */
var rule = module.exports = function (context) {

	return {
		'Identifier': function (node) {
			if (Common.Identifiers.Focus.some(function (name) {
				return node.name.indexOf(name) === 0;
			})) { context.report(node, Errors.ToHaveNone); }

		},
		'MemberExpression': function (node) {
			if (!node.object || node.object.type !== 'Identifier') { return; }
			if (!node.property || node.property.type !== 'Identifier') { return; }

			if (Common.Identifiers.Original.some(function (name) {
				return node.object.name.indexOf(name) === 0;
			}) && Common.Identifiers.Only.some(function (name) {
				return node.property.name === name;
			})) { context.report(node, Errors.ToHaveNone); }
		}
	};
};

rule.Errors = Errors;
