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

var defaultConfig = require('./../default-config');

/**
 *
 * @type {exports}
 */
var rule = module.exports = function (context) {
  var config = defaultConfig(context.options[0]);

  return {
    'Identifier': function (node) {
      Common.Identifiers.Exclude.concat(config.exclude).some(function (name) {
        if (node.name !== name) { return; }
        context.report(node, Errors.ToHaveNone);
      });
    },
    'MemberExpression': function (node) {
      if (!node.object || node.object.type !== 'Identifier') { return; }
      if (!node.property || node.property.type !== 'Identifier') { return; }

      if (Common.Identifiers.Original.concat(config.original).some(function (name) {
        return node.object.name === name;
      }) && Common.Identifiers.Skip.concat(config.skip).some(function (name) {
        return node.property.name === name;
      })) { context.report(node, Errors.ToHaveNone); }
    },
    'CallExpression': function (node) {
      if (node.callee.type !== 'Identifier') { return; }
      if (node.arguments.length === 2) { return; }

      if (Common.Identifiers.Original.concat(config.original).some(function (name) {
        return node.callee.name.indexOf(name) === 0;
      })) { context.report(node, Errors.ToHaveNone); }
    }
  };
};

rule.Errors = Errors;
