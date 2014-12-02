'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Rename method used throughout to change x.js and y.css to x.min.js and y.min.css.
  var rename = function(dest, src) {
    return dest + '/' + src.replace(/\.(\w+)$/i, '.min.$1');
  };

  grunt.initConfig({

    /*
     * Copy files.
     */
    copy: {

      // For development: copy unaltered resources into dist directory.
      dev: {
        files: [
          // JS files.
          {
            expand: true,
            flatten: true,
            cwd: '',
            dest: 'public/dist/js',
            src: [
              'js/*.js'
            ],
            rename: rename
          },
          // CSS files.
          {
            expand: true,
            flatten: true,
            cwd: '',
            dest: 'public/dist/css',
            src: [
              'css/*.css'
            ],
            rename: rename
          }
        ]
      },

      // For distribution: copy resources that don't get compiled.
      dist: {
        files: [
          // Vendor JS.
          {
            expand: true,
            flatten: true,
            cwd: '',
            dest: 'public/dist/js',
            src: [
              'bower_components/jquery/dist/jquery.min.js',
              'bower_components/jquery-ui/jquery-ui.min.js',
              'bower_components/bootstrap/dist/js/bootstrap.min.js'
            ]
          },
          // Vendor CSS.
          {
            expand: true,
            flatten: true,
            cwd: '',
            dest: 'public/dist/css',
            src: [
              'bower_components/bootstrap/dist/css/bootstrap.min.css'
            ]
          },
          // Images.
          {
            expand: true,
            flatten: true,
            cwd: '',
            dest: 'public/dist/images',
            src: [
              'images/accept.png',
              'images/asterisk_yellow.png',
              'images/cross.png',
              'images/delete.png'
            ]
          }
        ]
      }
    },

    /*
     * Minify JS. 
     */
    uglify: {
      options: {
        // Rename variables except for jQuery.
        mangle: {
          except: [
            'jQuery',
            '$'
          ]
        }
      },

      // Minify all js files in ./js and copy to ./public/dist.
      dist: {
        files: grunt.file.expandMapping(['js/*.js'], 'public/dist/js/', {
          expand: true,
          flatten: true,
          rename: rename
        })
      }
    },

    /*
     * Minify CSS. 
     */
    cssmin: {

      // Minify all css files in ./css and copy to ./public/dist.
      dist: {
        files: grunt.file.expandMapping(['css/*.css'], 'public/dist/css/', {
          expand: true,
          flatten: true,
          rename: rename
        })
      }
    },

    /*
     * Delete distribution files.
     */
    clean: ['public/dist'],

    /*
     * Watch for changes while developing.
     */
    watch: {
      scripts: {
        files: ['css/*.css', 'js/*.js'],
        tasks: ['copy:dev']
      }
    }

  });

  grunt.registerTask('dev', [
    'clean',
    'copy:dist',
    'copy:dev',
    'watch'
  ]);

  grunt.registerTask('default', [
    'clean',
    'copy:dist',
    'uglify',
    'cssmin'
  ]);

};