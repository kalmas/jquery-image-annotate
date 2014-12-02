'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    copy: {

      // For deving. Copy unaltered resources into dist directory.
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
            rename: function(dest, src) {
              // Rename to match HTML references.
              return dest + '/' + src.replace(/\.js$/i, '.min.js');
            }
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
            rename: function(dest, src) {
              // Rename to match HTML references.
              return dest + '/' +src.replace(/\.css$/i, '.min.css');
            }
          }
        ]
      },

      // For distribution. Resources that don't get changed.
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

    uglify: {
      options: {
        mangle: {
          // Don't rename jQuery.
          except: [
            'jQuery',
            '$'
          ]
        }
      },

      // Minimize JS for distribution.
      dist: {
        files: {
          'public/dist/js/jquery.annotate.min.js': ['js/jquery.annotate.js']
        }
      }
    },

    cssmin: {

      // Minimize CSS for distribution.
      dist: {
        files: {
          'public/dist/css/annotate.min.css': ['css/annotation.css']
        }
      }
    },

    // Empty the dist dir.
    clean: ['public/dist'],

    // Watch for changes while deving.
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