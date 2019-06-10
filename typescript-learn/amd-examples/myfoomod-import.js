define(["require", "exports", "./myfoomod"], function (require, exports, myfoomod) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log(myfoomod);
    console.log(myfoomod.MyFooMod);
    console.log(new myfoomod.MyFooMod().toUpper('hello'));
});
