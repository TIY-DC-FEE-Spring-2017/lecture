'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

        karma: {    // task name - you DO NOT make this up, it is defined already
            all: {  // target name - YOU make this up
                options : {
                    frameworks: [ 'mocha', 'chai' ],
                    browsers: [ 'Chrome' ],
                    files: [
                        'node_modules/angular/angular.js',
                        'node_modules/angular-mocks/angular-mocks.js',
                        'src/js/school.module.js',
                        'src/js/**/*.js', // this will NOT duplicate the module file
                        'test/**/*.spec.js'
                    ],
                    singleRun: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('build', [ 'karma' ]);

};
