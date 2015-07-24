var fs = require('fs');

var getPackageJson = function () {
    return JSON.parse(fs.readFileSync('./package.json', 'utf8'));
};

module.exports = getPackageJson;
