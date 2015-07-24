var gutil = require('gulp-util');

// Creates a fake stream from a string
var string_src = function (filename, string) {
    var src = require('stream').Readable({
        objectMode: true
    })
    src._read = function () {
        this.push(new gutil.File({
            cwd: "",
            base: "",
            path: filename,
            contents: new Buffer(string)
        }))
        this.push(null)
    }
    return src
};

module.exports = string_src;
