module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {                              // Task
            dist: {                            // Target
              options: {
                compass : true,
                style: 'expanded'
              },
              files: {                         // Dictionary of files
                'dist/css/main.css': '**/main.scss',       // 'destination': 'source'
              }
            }
        },
        watch: {
            sass: {
              files: ['**/*.scss'],
              tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass']);

};