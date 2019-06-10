define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MyFooMod = /** @class */ (function () {
        function MyFooMod() {
        }
        MyFooMod.prototype.toUpper = function (text) {
            return text.toUpperCase();
        };
        return MyFooMod;
    }());
    exports.MyFooMod = MyFooMod;
});
