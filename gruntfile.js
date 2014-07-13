module.exports = function(grunt) {
        grunt.initConfig({
                pkg: grunt.file.readJSON('package.json'),
                bower_concat: {
                    vendor: {
                        dest: 'built/js/vendor/_all.js'
                    }
                },
                sass: {                              // Task
                        dist: {                            // Target
                            options: {
                                compass : true,
                                style: 'nested'
                            },
                            files: {                         // Dictionary of files
                                'dist/css/main.css': '**/main.scss',       // 'destination': 'source'
                            }
                        }
                },
                uglify: {
                    vendor: {
                        src: ['built/js/vendor/_all.js'],
                        dest: 'dist/js/vendor.min.js'

                    }
                },
                watch: {
                        sass: {
                            files: ['**/*.scss'],
                            tasks: ['sass']
                        }
                }
        });
        grunt.loadNpmTasks('grunt-bower-concat');
        grunt.loadNpmTasks('grunt-contrib-sass');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');

        grunt.registerTask('default', ['bower_concat', 'uglify:vendor', 'sass']);

};