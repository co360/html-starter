"use strict";
var Hello3 = /** @class */ (function () {
    function Hello3() {
        this.message = "World3";
    }
    Hello3.prototype.greeting = function () {
        console.log(this.message);
    };
    return Hello3;
}());
module.exports = Hello3;
