// NOTE: You shouldn't repeat two "from" since it will generate in "define" function
// But it will continue to work though.
define(["require", "exports", "./my-export", "./my-export"], function (require, exports, my_export_1, my_export_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log(my_export_1.Hello);
    console.log(my_export_2.Hello);
});
