// Notice because of "export default", we can import it in different form!
define(["require", "exports", "./my-export-default", "./my-export-default"], function (require, exports, my_export_default_1, my_export_default_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Note that you can't import it using bracket style!
    // import { Hello4 } from "./my-export-default";
    console.log(my_export_default_1.default);
    console.log(my_export_default_2.default);
});
