'use-strict';
/* global describe, it, beforeEach, afterEach */

var Reporter = require('../index');
var Runner = require('./helpers/mock-runner');
var Test = require('./helpers/mock-test');
var testConsole = require('test-console');
var assert = require('assert');
var fs = require('fs');


describe('mocha-circleci-reporter', function() {
    
    var runner;
    var file = './test/output/console.xml';
    
    beforeEach(function() {
        runner = new Runner();
    });
    
    afterEach(function(){
        fs.unlinkSync(file);
    })
    
    it('should output spec to stdout', function() {
        
        new Reporter(runner, {
          reporterOptions: { mochaFile: 'test/output/console.xml' }
        });
        
        var stdout = testConsole.stdout.inspect();
        try{
          executeTestRunner();
        }
        finally{            
          stdout.restore();
        }
        
        assert(stdout.output[1], '\u001b[0mFoo Bar module\u001b[0m\n');
    });
    
    it('should output junit file', function() {
        
        new Reporter(runner, {
          reporterOptions: { mochaFile: 'test/output/console.xml' }
        });
        
        var stdout = testConsole.stdout.inspect();
        try{
          executeTestRunner();
          
          assert(fs.existsSync(file));
        }
        finally{            
          stdout.restore();
        }
    });
    
    function executeTestRunner(char){
        
        char = char || '';
        runner.start();

        runner.startSuite({
          title: 'Foo Bar module',
          tests: [1, 2]
        });
        
        runner.pass(new Test('Foo can weez the juice', 'can weez the juice', 1));
        runner.fail(new Test('Bar can narfle the garthog', 'can narfle the garthog', 1), {
          message: char + 'expected garthog to be dead' + char
        });
    
        runner.startSuite({
          title: 'Another suite!',
          tests: [1]
        });
        runner.pass(new Test('Another suite', 'works', 4));
    
        runner.end();
    }
        
});