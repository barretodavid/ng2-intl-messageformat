/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  var app = new Angular2App(defaults, {
    vendorNpmFiles: ['intl-messageformat/dist/intl-messageformat-with-locales.js']
  });
  return app.toTree();
};
