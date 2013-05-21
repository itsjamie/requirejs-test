require.config({
  "paths": {
    "underscore": "../vendor/lodash",
    "jquery": "../vendor/jquery",
    "backbone": "../vendor/backbone"
  },
  "shim": {
    "backbone": {
      exports: "Backbone",
      deps: ['jquery', 'underscore']
    }
  }
});