define(["require", "exports"], function (require, exports) {
    "use strict";
    class Hello3 {
        constructor() {
            this.message = "World3";
        }
        greeting() {
            console.log(this.message);
        }
    }
    return Hello3;
});
