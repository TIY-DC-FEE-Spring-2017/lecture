
module.exports = function configureGrunt(gruntConfig) {

    gruntConfig.initConfig({

        // clean: {  // task name
        //     cleanthebuild: {  // target name
        //         // ...
        //     }
        // },
        clean: [ 'build/' ],

        copy: {  // task name (defined by the plugin)

            copythehtml: { // target name (I make it up)
                // the configuration for THIS target, in THIS task is below
                files: [
                    {
                        cwd: 'src/',
                        src: [ '*.html' ],
                        dest: 'build/',
                        expand: true
                    }
                ]
            }

        },

        sass: {  // task name

            all: {  // target name
                // configuration for this target
                files: {
                    //  DESTINATION    :      SOURCE
                    'build/style.css' : 'src/sass/main.scss'
                }
            }

        },

        jshint: {

            appjs: {
                options: {
                    jshintrc: '.jshintrc'
                },
                files: {
                    src: [ 'src/**/*.js' ]
                }
            }

        },

        karma: {

            all: {
                options: {
                    // These came from my karma configuration file...
                    // they are the SAME options!
                    // IF you use grunt to run karma (tests), then we
                    // do NOT also need a app.conf.js file for karma separately
                    frameworks: [ 'mocha', 'chai' ],
                    browsers: [ 'Chrome' ],
                    singleRun: true,
                    files: [
                        'src/**/*.js',
                        'node_modules/fetch-mock/es5/client-browserified.js',
                        'test/specs/**/*.js'
                    ]
                }
            }

        }

    });

    // instead of listing EACH task on its own line here...
    //    gruntConfig.loadNpmTasks('grunt-contrib-copy');
    // we can run this ONE task to autoload all of the others
    require('load-grunt-tasks')(gruntConfig);

    // create a task ALIAS to run multiple OTHER tasks
    gruntConfig.registerTask( 'build', [ 'jshint', 'karma', 'clean', 'copy', 'sass' ] );

    // you can create more aliases!

};
