/**
 * @object
 * @version 2.0.0
 * @author nate-wilkins <nwilkins2012@gmail.com> (https://github.com/nate-wilkins)
 * @license MIT (c) 2014
 *
 * @description
 * ESLint plugin rules
 */
'use strict';

module.exports = {
  rules: {
    'exclude': require('./src/rules/exclude'),
    'focus': require('./src/rules/focus')
  },
  rulesConfig: {
    'exclude': [2, { focus: [], exclude: [] }],
    'focus': 2
  }
};
