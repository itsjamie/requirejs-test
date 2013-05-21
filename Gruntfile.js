module.exports = function(grunt) {
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
        uglify: {
          toplevel: false,
          ascii_only: true,
          beautify: false,
          max_line_length: 1000,
          no_mangle: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['requirejs']);
}