"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var my_export_1 = require("./my-export");
console.log(my_export_1.Hello);
var MyStringValidator = /** @class */ (function () {
    function MyStringValidator() {
    }
    MyStringValidator.prototype.isAcceptable = function (s) {
        return false;
    };
    return MyStringValidator;
}());
var a = new MyStringValidator();
console.log(a);
