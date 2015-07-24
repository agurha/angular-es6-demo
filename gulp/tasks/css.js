var gulp = require('gulp');
var config = require('../gulp-config.js');
var gutil = require('gulp-util');
var less = require('gulp-less');
var minifycss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var connect = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var spritesmith = require('gulp.spritesmith');

// Compiles + minifies Less files
gulp.task('css', ['copy-images'], function (cb) {
    return gulp.src(config.inputFile.lessFull)
        .pipe(less())
        .on('error', gutil.log.bind(gutil, 'Less Error'))
        .pipe(gulp.dest(config.outputDir.css))
        .pipe(sourcemaps.init())
        .pipe(minifycss())
        .pipe(rename(config.outputFile.cssmin))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.outputDir.css))
        .pipe(connect.reload());
});

// Create sprites
gulp.task('sprite', function () {
    // Generate our spritesheet
    var spriteData = gulp.src(config.inputDir.images + '/*.*')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.less',
            imgPath: '../images/sprite.png'
        }))
        .pipe(gulp.dest(config.outputDir.buildRoot));
});

// Copies images in inputDir.images to destination folder
gulp.task('copy-images', ['sprite'], function (cb) {
    return gulp.src([config.inputDir.images + '/**/*', config.outputDir.buildRoot + '/sprite.png'])
        .pipe(imagemin())
        .pipe(gulp.dest(config.outputDir.images));

});
