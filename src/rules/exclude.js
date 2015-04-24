/**
 * @eslint-rule
 * @author nate-wilkins <nwilkins2012@gmail.com> (https://github.com/nate-wilkins)
 * @license MIT (c) 2014
 *
 * @description
 * Rule to determine if any specs/tests are being excluded
 */
'use strict';

var Errors = require('./../errors').Exclude,
	Common = require('./../common');

/**
 *
 * @type {exports}
 */
var rule = module.exports = function (context) {

	return {
		'Identifier': function (node) {
			Common.Identifiers.Exclude.some(function (name) {
				if (node.name.indexOf(name) !== 0) { return; }
				context.report(node, Errors.ToHaveNone);
			});
		},
		'MemberExpression': function (node) {
			if (!node.object || node.object.type !== 'Identifier') { return; }
			if (!node.property || node.property.type !== 'Identifier') { return; }

			if (Common.Identifiers.Original.some(function (name) {
				return node.object.name.indexOf(name) === 0;
			}) && Common.Identifiers.Skip.some(function (name) {
				return node.property.name === name;
			})) { context.report(node, Errors.ToHaveNone); }
		},
		'CallExpression': function (node) {
			if (node.callee.type !== 'Identifier') { return; }
			if (node.arguments.length === 2) { return; }

			if (Common.Identifiers.Original.some(function (name) {
				return node.callee.name.indexOf(name) === 0;
			})) { context.report(node, Errors.ToHaveNone); }
		}
	};
};

rule.Errors = Errors;
