let mocha = require('mocha');
let assert = require('assert');
let app = require('../src/app');

mocha.describe('app', function () {
    mocha.it('app.greet', function () {
        let result = app.greet("World");
        assert.strictEqual(result, "Hello World");
    });
});
