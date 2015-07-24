var gulp = require('gulp');
var config = require('../gulp-config.js');
var del = require('del');

// Cleans the output and build folders
gulp.task('clean', function (cb) {
    del([config.outputDir.root + '/*', config.outputDir.buildRoot + '/*'], cb);
});
