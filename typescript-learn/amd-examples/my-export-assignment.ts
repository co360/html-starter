/*
The "export =" is TS way of exporting single object in module.
To use it, you muse use the "import module = require("module")" form.
 */
class Hello3 {
    message = "Hello World";
    greeting() {
        console.log(this.message);
    }
}
//
// NOTE if you forget to use "export =" here, then the generated JS script
// will not error, but will not have the "define()" part wrapper!
export = Hello3;
