var gulp = require('gulp');
var config = require('../gulp-config.js');
var gutil = require('gulp-util');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var ngannotate = require("gulp-ng-annotate");
var rename = require('gulp-rename');
var watchify = require('watchify');
var gutil = require('gulp-util');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var babelify = require("babelify");

// Using browserified output, minify with uglify and generate sourcemaps
var bundle = function (watch) {
    var bundler_to_use;
    if (watch) {
        bundler_to_use = bundler_watch;
    } else {
        bundler_to_use = bundler_nowatch;
    }

    return bundler_to_use
        .bundle()
        // log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source(config.inputFile.min))
        .pipe(buffer())
        .pipe(ngannotate())
        .pipe(gulp.dest(config.outputDir.js))
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify({
            mangle: false
        }))
        .pipe(rename(config.outputFile.jsmin))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.outputDir.js));
}


// Using browserified output, minify with uglify and generate sourcemaps
// Use browserify to compile ES6 -> ES5 and add angular $inject processing
var bundler_watch = watchify(browserify({
        debug: true,
        insertGlobals: true
    }))
    .add(config.inputFile.full)
    .transform(babelify.configure({
        sourceMapRelative: '.',
        sourceMaps: 'inline',
        optional: 'runtime'
    }));

bundler_watch.on('update', bundle); // on any dep update, runs the bundler
bundler_watch.on('log', gutil.log); // output build logs to terminal

// Same as above, with watching
var bundler_nowatch = browserify({
        debug: true,
        insertGlobals: true
    })
    .add(config.inputFile.full)
    .transform(babelify.configure({
        sourceMapRelative: '.',
        sourceMaps: 'inline',
        optional: 'runtime'
    }));
bundler_nowatch.on('log', gutil.log); // output build logs to terminal


// *****  Gulp Tasks
// Compiles ES6 + minify + create source maps
gulp.task('js', function () {
    bundle(false);
});

// Compiles css + js and then watches for changes and recompiles if required
// Runs css task on startup as watch will only run when it changes
gulp.task('watch', ['css'], function () {
    gulp.watch([config.inputDir.less + '/**/*.less'], ['css']);
    bundle(true);
});
