var istanbul = require('browserify-istanbul');
var browserifynginject = require('browserify-nginject');

module.exports = function (config) {
    config.set({
        basePath: '',
        browsers: ['PhantomJS'],
        frameworks: ['browserify', 'jasmine'],
        files: [
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            'vendor/jQuery/2.1.3/jquery-2.1.3.min.js',
            'vendor/angular/1.4.3/angular.min.js',
            'vendor/angular/1.4.3/angular-mocks.js',
            'vendor/angular-new-router/0.5.3/router.es5.min.js',
            'app/**/*.spec.js',
            'app/**/*.html'
        ],
        exclude: [],
        preprocessors: {
            'app/**/*.js': ['browserify'],
            "app/**/*.html": ['ng-html2js']
        },
        ngHtml2JsPreprocessor: {
            moduleName: 'templates'
        },
        reporters: ['coverage', 'junit'],
        singleRun: true,
        logLevel: config.LOG_INFO,
        coverageReporter: {
            dir: './build/coverage/',
            reporters: [{
                type: 'cobertura',
                file: 'cobertura-coverage.xml'
            }, {
                type: 'lcovonly',
                subdir: '.',
                file: 'lcov.info'
            }, {
                type: 'text-summary'
            }]
        },
        junitReporter: {
            outputDir: './build/junit',
            suite: ''
        },
        browserify: {
            debug: true,
            transform: [
                ['babelify', {
                    "optional": [
                        "runtime"
                    ]
                }],
                browserifynginject(),
                istanbul({
                    ignore: ['**/*.spec.js', '**/app/utils.js']
                })
            ]
        }
    });

};
