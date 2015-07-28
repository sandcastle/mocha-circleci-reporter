'use strict';

function Test(fullTitle, title, duration) {
  
  this.title = title;
  this.duration = duration;
  
  this.fullTitle = function() { 
    return fullTitle; 
  };
  
  this.slow = function() { };
}

module.exports = Test