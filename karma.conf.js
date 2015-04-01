var istanbul = require('browserify-istanbul');

module.exports = function (config) {
    config.set({
        basePath: '',
        browsers: ['PhantomJS'],
        frameworks: ['browserify', 'jasmine'],
        files: [
            'vendor/angular/1.2.26/angular.min.js',
            'vendor/angular/1.2.26/angular-mocks.js',
            'app/**/*.spec.js'
        ],
        exclude: [],
        preprocessors: {
            'app/**/*.js': ['browserify']
        },
        reporters: ['coverage', 'dots'],
        singleRun: true,
        logLevel: config.LOG_INFO,
        coverageReporter: {
            dir: './build/coverage/',
            // Currently an issue with karma-coverage@0.2.7 - gives errors generating html/lcov reports
            reporters: [{
                type: 'html'
            }, {
                type: 'text' // Currently an issue with karma-coverage@0.2.7 - gives errors generating html/lcov reports
            }, {
                type: 'text-summary'
            }, {
                type: 'cobertura'
            }]
        },
        browserify: {
            debug: true,
            transform: ['babelify', istanbul({
                ignore: ['**/*.spec.js']
            })]
        }
    });

};
