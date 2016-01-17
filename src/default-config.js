/**
 * @function
 * @author nate-wilkins <nwilkins2012@gmail.com> (https://github.com/nate-wilkins)
 * @license MIT (c) 2014
 *
 * @description
 * Assign default linting configuration
 */
'use strict';

module.exports = function (config) {
  config = config || {};
  config.original = config.original || [];
  config.focus = config.focus || [];
  config.exlcude = config.exclude || [];
  config.skip = config.skip || [];
  config.only = config.only || [];
  return config;
};
