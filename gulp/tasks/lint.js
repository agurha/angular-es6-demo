var gulp = require('gulp');
var config = require('../gulp-config.js');
var eslint = require('gulp-eslint');
var fs = require('fs');

// Runs eslint - settings are in .eslintrc
gulp.task('lint', ['lint-js', 'lint-spec'], function (cb) {});

gulp.task('lint-js', function (cb) {
    return gulp.src([config.inputDir.app + '/**/*.js', '!' + config.inputDir.app + '/**/*.spec.js'])
        .pipe(eslint())
        .pipe(eslint.format('jslint-xml', fs.createWriteStream(config.outputDir.buildRoot + '/jslint-result.xml')))
        .pipe(eslint.format());
});

gulp.task('lint-spec', function (cb) {
    return gulp.src([config.inputDir.app + '/**/*.spec.js'])
        .pipe(eslint({
            configFile: "./.eslintrc-spec"
        }))
        .pipe(eslint.format()); // For spec files we just print to the screen we dont generate a xml file
});
