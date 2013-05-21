module.exports = function(grunt) {
  "use strict";
  grunt.initConfig({
    requirejs: {
      amd: {
        options: {
          baseUrl: "library-name",
          dir: "dist/",
          modules: [
            {
              name: "library-name"
            }
          ],
          paths: {
            "jquery": "empty:",
            "underscore": "empty:",
            "backbone": "empty:"
          },
          findNestedDependencies: false
        }        
      },
      global: {
        options: {
          baseUrl: "./library-name",
          insertRequire: ['library-name'],
          exclude: ['jquery', 'underscore', 'backbone'],
          name: "../vendor/almond",
          include: ['library-name'],
          out: "dist/library-name.global.js",
          stubModules: ["underscore", "backbone", "jquery"],
          wrap: true,
          findNestedDependencies: true
        }
      },
      
      options: {
        optimize: "uglify",
        mainConfigFile: "require.config.js",
        useStrict: false,
        removeCombined: false,
        /*jshint camelcase:false*/
        uglify: {
          toplevel: false,
          ascii_only: true,
          beautify: false,
          max_line_length: 1000,
          no_mangle: true
        }
      }
    },
    connect: {
      test: {
        port: 8000
      }
    },
    jasmine: {
      src: 'library-name/**/*.js',
      options: {
        specs: 'test/specs/**/*Spec.js',
        helpers: 'test/sepcs/**/*Helper.js',
        host: 'http://127.0.0.1:8000/',
        template: require('grunt-template-jasmine-requirejs'),
        templateOptions: {
          requireConfigFile: 'require.config.js'
        }
      }
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'library-name/**/*.js',
        'test/spec/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('test', ['jshint', 'connect:test', 'jasmine']);
  grunt.registerTask('build', ['test', 'requirejs']);
};