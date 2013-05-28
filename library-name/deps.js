define('underscore', function() {
  "use strict";
  return window._;
});

define('jquery', function() {
  "use strict";
  return window.jQuery;
});

define('backbone', ['underscore', 'jquery'], function() {
  "use strict";
  return window.Backbone;
});