'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
   
    connect: {
      development: {
        options: {
          keepalive: true,
        }
      }
    }
  });



  grunt.loadNpmTasks('grunt-contrib-connect');
    
  // Default task.
  grunt.registerTask('default', ['connect:development']);
  grunt.registerTask('server', ['connect:development']);
};
