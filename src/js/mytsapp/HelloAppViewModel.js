define(["require", "exports"], function (require, exports) {
    "use strict";
    var HelloAppViewModel = /** @class */ (function () {
        function HelloAppViewModel() {
            this.helloMessage = "Hello World";
        }
        return HelloAppViewModel;
    }());
    return new HelloAppViewModel();
});
