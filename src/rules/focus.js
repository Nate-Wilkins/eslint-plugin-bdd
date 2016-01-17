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

var defaultConfig = require('./../default-config');

/**
 *
 * @type {exports}
 */
var rule = module.exports = function (context) {
  var config = defaultConfig(context.options[0]);

  return {
    'Identifier': function (node) {
      if (Common.Identifiers.Focus.concat(config.focus).some(function (name) {
        return node.name === name;
      })) { context.report(node, Errors.ToHaveNone); }
    },
    'MemberExpression': function (node) {
      if (!node.object || node.object.type !== 'Identifier') { return; }
      if (!node.property || node.property.type !== 'Identifier') { return; }

      if (Common.Identifiers.Original.concat(config.original).some(function (name) {
        return node.object.name === name;
      }) && Common.Identifiers.Only.concat(config.only).some(function (name) {
        return node.property.name === name;
      })) { context.report(node, Errors.ToHaveNone); }
    }
  };
};

rule.Errors = Errors;
