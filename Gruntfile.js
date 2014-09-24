/*global module:false*/
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        jshint: {
            gruntfile: {
                src: 'Gruntfile.js'
            }
        },
        compass: {
            dist: {
                options: {
                    cssDir: 'casa/public/assets/css',
                    outputStyle: 'compressed',
                    sassDir: 'sass',
                    specify: 'sass/app.scss'
                }
            }
        },
        concat: {
            lib: {
                src: [
                    'js/lib/jquery-1.11.0.min.js',
                    'js/lib/angular.min.js',
                    'js/lib/angular-ui-router.min.js',
                    'js/lib/ui-bootstrap-tpls-0.11.0.min.js'
                ],
                dest: 'casa/public/assets/js/lib.js',
            },
            ng: {
                src: [
                    'js/ng/app.js',
                    'js/ng/controllers.js',
                    'js/ng/directives.js'
                ],
                dest: 'casa/public/assets/js/ng.js',
            },
            controllers: {
                src: [
                    'js/controllers/main.js',
                    'js/controllers/listings.js',
                    'js/controllers/sublet.js'
                ],
                dest: 'casa/public/assets/js/controllers.js',
            },
        },
        uglify: {
            options: {
                mangle: false
            },
            lib: {
                files: {
                    'casa/public/assets/js/lib.min.js': ['casa/public/assets/js/lib.js']
                }
            },
            ng: {
                files: {
                    'casa/public/assets/js/ng.min.js': ['casa/public/assets/js/ng.js']
                }
            },
            controllers: {
                files: {
                    'casa/public/assets/js/controllers.min.js': ['casa/public/assets/js/controllers.js']
                }
            }
        },
        watch: {
            options: {
                interrupt: true,
            },
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile', 'concat', 'uglify']
            },
            jsNg: {
                files: ['js/ng/*.js'],
                tasks: ['concat:ng', 'uglify:ng']
            },
            jsControllers: {
                files: ['js/controllers/*.js'],
                tasks: ['concat:controllers', 'uglify:controllers']
            },
            css: {
                files: ['sass/*.scss', 'sass/*/*.scss'],
                tasks: ['compass']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    /**
     * Tasks
     */

    // Default
    grunt.registerTask('default', ['watch']);

    // Build
    grunt.registerTask('build', ['compass', 'concat', 'uglify']);
    grunt.registerTask('build-css', ['compass']);
    grunt.registerTask('build-js', ['concat:controllers', 'uglify:controllers', 'concat:lib', 'uglify:lib', 'concat:ng', 'uglify:ng']);
    grunt.registerTask('build-js-controllers', ['concat:controllers', 'uglify:controllers']);
    grunt.registerTask('build-js-lib', ['concat:lib', 'uglify:lib']);
    grunt.registerTask('build-js-ng', ['concat:ng', 'uglify:ng']);
};
