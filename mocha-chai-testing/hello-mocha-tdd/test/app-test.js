let app = require('../src/app');
let assert = require('assert');

suite('app', function () {
    test('app.greet', function () {
        let result = app.greet("World");
        assert.strictEqual(result, "Hello World");
    });
});
