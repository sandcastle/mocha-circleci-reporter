'use-strict';

var Spec = require('mocha').reporters.Spec;
var JUnit = require('mocha-junit-reporter');


function MochaCircleCIReporter(runner, options) {
  new Spec(runner, options);
  new JUnit(runner, options);
}

module.exports = MochaCircleCIReporter;
