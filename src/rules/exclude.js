/**
 * @eslint-rule
 * @author nate-wilkins <nwilkins2012@gmail.com> (https://github.com/nate-wilkins)
 * @license MIT (c) 2014
 *
 * @description
 * Rule to determine if any specs/tests are being excluded
 */
'use strict';

var Errors = require('./../errors').Exclude;

/**
 *
 * @type {exports}
 */
var rule = module.exports = function (context) {

	return {
		"Identifier": function (node) {
			["xdescribe", "xit"].forEach(function (name) {
				if (node.name !== name) { return; }
				context.report(node, Errors.ToHaveNone);
			});
		},
		"MemberExpression": function (node) {
			if (!node.object || node.object.type !== "Identifier") { return; }
			if (!node.property || node.property.type !== "Identifier") { return; }

			if (["describe", "it"].indexOf(node.object.name) === -1) { return; }
			if (["skip"].indexOf(node.property.name) === -1) { return; }
			context.report(node, Errors.ToHaveNone);
		},
		"CallExpression": function (node) {
			if (node.callee.type !== "Identifier") { return; }
			if (["describe", "it"].indexOf(node.callee.name) === -1) { return; }

			if (node.arguments.length === 2) { return; }
			context.report(node, Errors.ToHaveNone);
		}
	};
};

rule.Errors = Errors;
