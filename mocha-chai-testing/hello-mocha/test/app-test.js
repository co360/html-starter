let app = require('../src/app');
let assert = require('assert');

describe('app', function () {
    it('app.greet', function () {
        let result = app.greet("World");
        assert.strictEqual(result, "Hello World");
    });
});
