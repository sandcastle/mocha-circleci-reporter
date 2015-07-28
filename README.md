# mocha-circleci-reporter [![Build Status](https://travis-ci.org/sandcastle/mocha-circleci-reporter.svg)](https://travis-ci.org/sandcastle/mocha-circleci-reporter)

> A Mocha reporter specifically for [Circle CI](https://circleci.com/).


## Getting Started

Install the reporter as a development dependency:

```sh
npm install mocha --save-dev
npm install mocha-circleci-reporter --save-dev
```

Update your `package.json` to use the reporter when running Mocha: 

```json
{
  "name": "my-package",
  "version": "0.0.1",
  "scripts": {
    "test": "node_modules/.bin/mocha --reporter mocha-circleci-reporter test/*.js"
  }
}
```


## Background

### Why another reporter?

As of Mocha 2.x, its not possible to use multple reporters out of the box.
This complicates things when dealing with CI systems like Circle CI that 
require a format such as [jUnit XML](https://windyroad.com.au/dl/Open%20Source/JUnit.xsd)
as a lot of the goodness that is written to console when running the default
reporter (`Spec`). 

To overcome this, the `mocha-circleci-reporter` report combines both the 
builtin `Spec` and `mocha-junit-report` reporters.

Example spec output:

![spec_output.jpg](docs/images/spec_output.jpg)

Example jUnit output:

![spec_output.jpg](docs/images/junit_output.jpg)


### Mocha 3.x

There is work underway in Mocha 3.x to move to a plugin architecture that would
make multiple reporters dead simple, until then I hope this simplifies things.

https://github.com/mochajs/mocha/issues/1457

