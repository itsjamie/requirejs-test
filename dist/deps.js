define('underscore', function() {
  
  return window._;
});

define('jquery', function() {
  
  return window.jQuery;
});

define('backbone', ['underscore', 'jquery'], function() {
  
  return window.Backbone;
});