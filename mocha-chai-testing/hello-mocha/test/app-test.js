let app = require('../src/app');
let assert = require('chai').assert;

describe('app', function () {
    it('app.greet', function () {
        let result = app.greet("World");
        assert.equal(result, "Hello World");
    });
});
