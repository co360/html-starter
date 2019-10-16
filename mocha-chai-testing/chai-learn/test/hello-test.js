let mocha = require('mocha');

// The three major API from chai are: assert, expect, and should
let assert = require('chai').assert;

mocha.describe('hello', function () {
    mocha.it('hello.assert', function () {
        assert.equal(1 + 1, 2);
    });
});
