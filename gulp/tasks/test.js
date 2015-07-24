var gulp = require('gulp');
var config = require('../gulp-config.js');
var karma_server = require('karma').Server;

// Runs tests with karma
gulp.task('test', function (done) {
    new karma_server({
        configFile: config.inputFile.karmaConfig,
        singleRun: true
    }, done).start();
});
