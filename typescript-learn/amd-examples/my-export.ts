/*
A normal "export" is used in a module to export one or more named objects.
The user must import the same exact name to use it.
 */
class Hello20 {
    message = "Hello World";
    greeting() {
        console.log(this.message);
    }
}
class Hello21 {
    message = "Hello World";
    greeting() {
        console.log(this.message);
    }
}

export {Hello20, Hello21};
