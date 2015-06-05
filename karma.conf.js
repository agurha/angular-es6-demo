var istanbul = require('browserify-istanbul');

module.exports = function (config) {
    config.set({
        basePath: '',
        browsers: ['PhantomJS'],
        frameworks: ['browserify', 'jasmine'],
        files: [
            'vendor/jQuery/2.1.3/jquery-2.1.3.min.js',
            'vendor/angular/1.4.0/angular.min.js',
            'vendor/angular/1.4.0/angular-mocks.js',
            'app/**/*.spec.js',
            'app/**/*.html'
        ],
        exclude: [],
        preprocessors: {
            'app/**/*.js': ['browserify'],
            "app/**/*.html": ["ng-html2js"]
        },
        ngHtml2JsPreprocessor: {
            moduleName: 'templates'
        },
        reporters: ['coverage', 'dots'],
        singleRun: true,
        logLevel: config.LOG_INFO,
        coverageReporter: {
            dir: './build/coverage/',
            // Currently an issue with karma-coverage@0.2.7 - gives errors generating html/lcov reports
            reporters: [ //{         type: 'html'},
                {
                    type: 'text' // Currently an issue with karma-coverage@0.2.7 - gives errors generating html/lcov reports
                }, {
                    type: 'text-summary'
                }, {
                    type: 'cobertura'
                }
            ]
        },
        browserify: {
            debug: true,
            transform: ['babelify', 'browserify-ngannotate', istanbul({
                ignore: ['**/*.spec.js', '**/app/utils.js']
            })]
        }
    });

};
