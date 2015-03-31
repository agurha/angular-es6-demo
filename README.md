# angular-es6-demo
Demo project using ES6 in Angular with Gulp as the build tool

Run **npm install** to install/update all dependencies

Requires gulp to be installed globally with **npm install -g gulp**

To build just run **gulp**  
Other gulp tasks 
* *watch* - will watch for any changes in the less or js files and will auto rebuild if required
* *css*   - will only build the css
* *js*    - will only build the javascript files (transpile ES6 code with browserify (babelify plugin) and then minify and generating source maps)

