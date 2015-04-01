'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var babelify = require("babelify");
var ngannotate = require("browserify-ngannotate");
var rename = require('gulp-rename');
var eslint = require('gulp-eslint');
var watchify = require('watchify');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer');
var less = require('gulp-less');
var minifycss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var karma = require('karma').server;


// Configuration section start ==========================================
var inputDir = {
    app: './app',
    less: './theme/less',
    images: './theme/images'
};
var inputFile = {
    min: 'app.js',
    full: inputDir.app + '/app.js',
    'less': 'app.less',
    'lessFull': inputDir.less + '/app.less',
    karmaConfig: __dirname + '/karma.conf.js'

};
var outputDir = {
    root: './dist',
    buildRoot: './build',
    js: './dist/js',
    css: './dist/css',
    images: './dist/images',
    contentServer: process.env.content_server.replace(/"/g, '') // assumes an environment variable content_server
};
var outputFile = {
    jsmin: 'app.min.js',
    cssmin: 'app.min.css'
};
var config = {
    'inputDir': inputDir,
    'inputFile': inputFile,
    'outputDir': outputDir,
    'outputFile': outputFile
};
// Configuration section end ==========================================


// Use browserify to compile ES6 -> ES5 and add angular $inject processing
var bundler_watch = watchify(browserify({
        debug: true,
        insertGlobals: true
    }))
    .add(config.inputFile.full)
    .transform(babelify)
    .transform(ngannotate);

bundler_watch.on('update', bundle); // on any dep update, runs the bundler
bundler_watch.on('log', gutil.log); // output build logs to terminal
// Same as above, with watching
var bundler_nowatch = browserify({
        debug: true,
        insertGlobals: true
    })
    .add(config.inputFile.full)
    .transform(babelify)
    .transform(ngannotate);
bundler_nowatch.on('log', gutil.log); // output build logs to terminal

// Using browserified output, minify with uglify and generate sourcemaps
function bundle(watch) {
    var bundler_to_use;
    if (watch) {
        bundler_to_use = bundler_watch;
    } else {
        bundler_to_use = bundler_nowatch;
    }
    return bundler_to_use.bundle()
        // log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source(config.inputFile.min))
        .pipe(buffer())
        .pipe(gulp.dest(config.outputDir.js))
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .pipe(rename(config.outputFile.jsmin))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.outputDir.js));
}


// *****  Gulp Tasks
// Compiles ES6 + minify + create source maps
gulp.task('js', function () {
    bundle(false);
});

// Compiles css + js and then watches for changes and recompiles if required
// Runs css task on startup as watch will only run when it changes
gulp.task('watch', ['clean', 'css'], function () {
    gulp.watch([inputDir.less + '/**/*.less'], ['css']);
    bundle(true);
});

// Runs eslint - settings are in .eslintrc
gulp.task('lint', function (cb) {
    return gulp.src([config.inputDir.app + '/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format());
});

// Compiles + minifies Less files
gulp.task('css', function (cb) {
    return gulp.src(config.inputFile.lessFull)
        .pipe(less())
        .on('error', gutil.log.bind(gutil, 'Less Error'))
        .pipe(gulp.dest(config.outputDir.css))
        .pipe(sourcemaps.init())
        .pipe(minifycss())
        .pipe(rename(config.outputFile.cssmin))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.outputDir.css));
});

// Copies images in inputDir.images to destination folder
gulp.task('copy-images', function (cb) {
    return gulp.src(inputDir.images + '/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest(outputDir.images));

});

// Copies output folder to content server
gulp.task('copy-to-content-server', function () {
    console.log("Content server = " + outputDir.contentServer);
    return gulp.src(outputDir.root + '/**/*')
        .pipe(gulp.dest(outputDir.contentServer));

});

// Cleans the output folder
gulp.task('clean', function (cb) {
    del([config.outputDir.root + '/*'], cb);
});


// Runs tests with karma
gulp.task('test', function (done) {
    karma.start({
        configFile: inputFile.karmaConfig,
        singleRun: true
    }, done)
});


// Default task - will also print the configuration used
gulp.task('default', ['clean', 'copy-images', 'css', 'js'], function () {
    console.log("Config = ");
    console.log(config);
});
