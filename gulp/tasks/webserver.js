var gulp = require('gulp');
var connect = require('gulp-connect');

// Runs a local webserver to test application
gulp.task('webserver', function () {
    connect.server({
        root: process.cwd(),
        livereload: true,
        port: 8083
    });
});
