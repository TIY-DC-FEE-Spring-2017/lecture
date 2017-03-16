
module.exports = function karmConfig( config ) {
    config.set({
        // Karma will INJECT the mocha and chai JS files
        // into its test runner HTML for us
        frameworks: [ 'mocha', 'chai' ],
        browsers: [ 'Chrome' ],
        singleRun: true,
        files: [
            // globbing pattern
            // look in the src/ directory and ANY subdirectory
            // for ANY file that ends in .js
            'src/**/*.js',
            'node_modules/sinon/pkg/sinon-2.0.0.js',
            'test/specs/**/*.js'
        ]
    });
};
