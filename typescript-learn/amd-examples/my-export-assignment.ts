class Hello3 {
    message = "World3";
    greeting() {
        console.log(this.message);
    }
}
//
// NOTE if you forget to use "export =" here, then the generated JS script
// will not error, but will not have the "define()" part wrapper!
export = Hello3;
