/**
 * @eslint-rule
 * @author nate-wilkins <nwilkins2012@gmail.com> (https://github.com/nate-wilkins)
 * @license MIT (c) 2014
 *
 * @description
 * Rule to determine if focus tests are used
 */
'use strict';

var Errors = require('./../errors').Focus;

/**
 *
 * @type {exports}
 */
var rule = module.exports = function (context) {

	return {
		"Identifier": function (node) {
			["ddescribe", "iit"].forEach(function (name) {
				if (node.name !== name) { return; }
				context.report(node, Errors.ToHaveNone);
			});
		},
		"MemberExpression": function (node) {
			if (!node.object || node.object.type !== "Identifier") { return; }
			if (!node.property || node.property.type !== "Identifier") { return; }

			if (["describe", "it"].indexOf(node.object.name) === -1) { return; }
			if (["only"].indexOf(node.property.name) === -1) { return; }
			context.report(node, Errors.ToHaveNone);
		}
	};
};

rule.Errors = Errors;
