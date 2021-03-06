module.exports = function(grunt) {
        grunt.initConfig({
                pkg: grunt.file.readJSON('package.json'),
                bower_concat: {
                    vendor: {
                        dest: 'built/js/vendor/_all.js',
                        dependencies: {
                            'angular': 'jquery'
                        }
                    }
                },
                ngtemplates: {
                    ngTemplates: {
                        src: ['src/**/*.html'],
                        dest: 'dist/js/templates.js'
                    }
                },
                sass: {                              // Task
                        dist: {                            // Target
                            options: {
                                compass : true,
                                style: 'nested'
                            },
                            files: {                         // Dictionary of files
                                'dist/css/main.css': 'src/scss/main.scss',       // 'destination': 'source'
                            }
                        }
                },
                uglify: {
                    vendor: {
                        src: ['built/js/vendor/_all.js'],
                        dest: 'dist/js/vendor.min.js'

                    },
                    app: {
                        options: {
                            sourceMap: false,
                            beautify: true,
                            wrap: true,
                            mangle: false
                        },
                        src: ['src/**/*.js'],
                        dest: 'dist/js/main.js'
                    }
                },
                watch: {
                        sass: {
                            files: ['src/**/*.scss'],
                            tasks: ['sass']
                        },
                        js: {
                            files: ['src/**/*.js'],
                            tasks: ['uglify:app']
                        },
                        templates: {
                            files: ['src/**/*.html'],
                            tasks: ['ngtemplates']
                        }
                }
        });
        grunt.loadNpmTasks('grunt-bower-concat');
        grunt.loadNpmTasks('grunt-contrib-sass');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-angular-templates');

        grunt.registerTask('default', ['bower_concat', 'uglify:vendor', 'ngtemplates', 'uglify:app', 'sass']);

};