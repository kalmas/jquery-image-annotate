'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    copy: {
      dist: {
        files: [
          {
            expand: true,
            flatten: true,
            cwd: '',
            dest: 'dist/images',
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
          except: ['jQuery', '$']
        },
        sourceMap: true
      },
      dist: {
        files: {
          'dist/js/jquery.min.js': ['bower_components/jquery/dist/jquery.js'],
          'dist/js/jquery-ui.min.js': ['bower_components/jquery-ui/jquery-ui.js'],
          'dist/js/jquery.annotate.min.js': ['js/jquery.annotate.js']
        }
      }
    },

    cssmin: {
      dist: {
        files: {
          'dist/css/annotate.min.css': ['css/annotation.css']
        }
      }
    },

    clean: ['dist']

  });

  grunt.registerTask('default', [
    'clean',
    'copy',
    'uglify',
    'cssmin'
  ]);

};
