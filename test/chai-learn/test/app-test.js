let assert = require('chai').assert;
let app = require('../src/app');

let result = app.greet("World");
assert.equal(result, "Hello World");
