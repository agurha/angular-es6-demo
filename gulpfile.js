'use strict';

var gulp = require('gulp');
var dir = require('require-dir');
var config = require('./gulp/gulp-config.js');

dir('./gulp/tasks', {
    recurse: true
});

// Default task - will also print the configuration used
gulp.task('default', ['css', 'js'], function () {
    console.log("Config = ");
    console.log(config);
});
