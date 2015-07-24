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
    karmaConfig: process.cwd() + '/karma.conf.js'

};
var outputDir = {
    root: './dist',
    buildRoot: './build',
    js: './dist/js',
    css: './dist/css',
    images: './dist/images',
    contentServer: (process.env.content_server || '').replace(/"/g, '') // assumes an environment variable content_server
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


module.exports = config;
