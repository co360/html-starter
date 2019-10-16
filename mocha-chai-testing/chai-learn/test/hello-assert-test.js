let mocha = require('mocha');

// The three major APIs from chai are: assert, expect, and should
let assert = require('chai').assert;

mocha.describe('hello-assert', function () {
    mocha.it('hello-assert common api', function () {
        assert.equal(1 + 1, 2);
    });
});
