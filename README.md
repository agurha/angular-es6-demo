# AngularJS ES6 Demo
Demo project using ES6 in Angular. Gulp as the build tool.
The ES6 is transpiled using [browserify](http://browserify.org/) with the [babelify](https://github.com/babel/babelify) plugin and then minified using [uglify2](https://github.com/mishoo/UglifyJS2). 

Images are minified using [imagemin](https://www.npmjs.com/package/gulp-imagemin) and CSS are generated from [Less](https://github.com/plus3network/gulp-less) surce code.

Unit testing uses [karma](http://karma-runner.github.io/0.12/index.html) with [jasmine](http://jasmine.github.io/2.2/introduction.html)

This sample code was based on/inspired by [Exploring ES6 Classes In AngularJS 1.x](http://www.michaelbromley.co.uk/blog/350/exploring-es6-classes-in-angularjs-1-x?utm_content=buffer184f8&utm_medium=social&utm_source=plus.google.com&utm_campaign=buffer)

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

Does not currently support factories (can easily be added by looking at [register.js](https://github.com/michaelbromley/angular-es6/blob/master/src/app/utils/register.js)
