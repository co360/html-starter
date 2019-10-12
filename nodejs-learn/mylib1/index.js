const _ = require('lodash');
module.exports.PI = Math.PI;
module.exports.random = function (min, max) {
    return Math.floor(Math.random() * max) + min;
};
module.exports.greeting = function (name) {
    return "Hello " + name;
};
module.exports.uniqueId = _.uniqueId;
