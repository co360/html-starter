"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberRegexp = /^[0-9]+$/;
var ZipCodeValidatorImpl = /** @class */ (function () {
    function ZipCodeValidatorImpl() {
    }
    ZipCodeValidatorImpl.prototype.isAcceptable = function (s) {
        return s.length === 5 && exports.numberRegexp.test(s);
    };
    return ZipCodeValidatorImpl;
}());
exports.ZipCodeValidatorImpl = ZipCodeValidatorImpl;
var Hello = /** @class */ (function () {
    function Hello() {
        this.message = "World";
    }
    Hello.prototype.greeting = function () {
        console.log(this.message);
    };
    return Hello;
}());
exports.Hello = Hello;
exports.HelloAlias = Hello;
var Hello2 = /** @class */ (function () {
    function Hello2() {
        this.message = "World2";
    }
    Hello2.prototype.greeting = function () {
        console.log(this.message);
    };
    return Hello2;
}());
exports.Hello2 = Hello2;
var Hello3 = /** @class */ (function () {
    function Hello3() {
        this.message = "World3";
    }
    Hello3.prototype.greeting = function () {
        console.log(this.message);
    };
    return Hello3;
}());
// You can't use "export =" while this module contains other "export" statement!
// This only works if you have this were the only statement.
//export = Hello3;
