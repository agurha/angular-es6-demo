# AngularJS ES6 Demo 
[![Build Status](https://travis-ci.org/starmage/angular-es6-demo.svg?branch=master)](https://travis-ci.org/starmage/angular-es6-demo) [![devDependency Status](https://david-dm.org/starmage/angular-es6-demo/dev-status.svg)](https://david-dm.org/starmage/angular-es6-demo#info=devDependencies) [![Coverage Status](https://coveralls.io/repos/starmage/angular-es6-demo/badge.svg?branch=master)](https://coveralls.io/r/starmage/angular-es6-demo?branch=master)

This is a demo project to showcase/proof of concept using ES6 in AngularJS 1.4, and how such a project can be setup. 

**Tools/Technologies used**
* Angular 1.4
* Angular new router
* Gulp
* BabelJS
* Karma
* Jasmine
* Browserify
* ngAnnotate
* Imagemin
* Less
* UglifyJS2
* SpriteSmith

[Gulp](http://gulpjs.com/) is used as the build tool, and the ES6 transpiler chosen was [BabelJS](http://babeljs.io/).

Technically, the ES6 is transpiled using [browserify](http://browserify.org/) with the [babelify](https://github.com/babel/babelify) and [ngAnnotate](https://github.com/omsmith/browserify-ngannotate) plugins and then minified using [uglify2](https://github.com/mishoo/UglifyJS2).

Images are minified using [imagemin](https://www.npmjs.com/package/gulp-imagemin) and CSS are generated from [Less](https://github.com/plus3network/gulp-less) source code.
Sprites can also be build using [gulp.spritesmith](https://github.com/twolfson/gulp.spritesmith).

Unit testing uses [karma](http://karma-runner.github.io/0.12/index.html) with [jasmine](http://jasmine.github.io/2.2/introduction.html)

This sample code was based on/inspired by [Exploring ES6 Classes In AngularJS 1.x](http://www.michaelbromley.co.uk/blog/350/exploring-es6-classes-in-angularjs-1-x?utm_content=buffer184f8&utm_medium=social&utm_source=plus.google.com&utm_campaign=buffer) and its demo project [Angular ES6](https://github.com/michaelbromley/angular-es6)

## Dependencies
Gulp needs to be installed
```
npm install -g gulp
```

## Installation
To install all dependencies:
```
npm install
```

## Gulp tasks
To build just run 
```
gulp
```
Gulp tasks 
* *watch* - will watch for any changes in the less or js files and will auto rebuild if required
* *css*   - will only build the css
* *js*    - will only build the javascript files (transpile ES6 code with browserify (babelify plugin) and then minify and generating source maps)
* *test*  - will run unit tests

See gulpfile.js for other tasks.

## Angular support
Supports the following Angular constructs
* services
* controllers
* providers
* directives (with the controllerAs syntax)

Does not currently support factories (can easily be added by looking at [register.js](https://github.com/michaelbromley/angular-es6/blob/master/src/app/utils/register.js))

## License
MIT

