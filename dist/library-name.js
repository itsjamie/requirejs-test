
requirejs.config({
  "shim": {
    "backbone": {
      exports: "Backbone",
      deps: ['jquery', 'underscore']
    },
    "underscore": {
      exports: "_"
    },
    "jquery": {
      exports: "jQuery"
    }
  }
});

define('library-name',['underscore'], function(_) {
  
  var even = _.filter([1,2,3,4,5,6], function(num) {
    return num % 2 === 0;
  });
  return {
    even: even
  };
});