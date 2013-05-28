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
          findNestedDependencies: false,
          paths: {
            "jquery": "empty:",
            "underscore": "empty:",
            "backbone": "empty:"
          },
        }        
      },
      global: {
        options: {
          baseUrl: "./library-name",
          insertRequire: ['library-name'],
          name: "../vendor/almond",
          include: ['deps', 'library-name'],
          out: "dist/library-name.global.js",
          wrap: true,
          findNestedDependencies: true,
          paths: {
            "jquery": "empty:",
            "underscore": "empty:",
            "backbone": "empty:"
          }
        }
      },
      
      options: {
        optimize: "none",
        mainConfigFile: "library-name/library-name.js",
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
        options: {
          port: 8000  
        }
      },
      develop: {
        options: {
          port: 3000
        }
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
          requireConfigFile: 'library-name/library-name.js'
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

  grunt.registerTask('develop', ['connect:develop:keepalive']);
  grunt.registerTask('test', ['jshint', 'connect:test', 'jasmine']);
  grunt.registerTask('build', ['test', 'requirejs']);
};