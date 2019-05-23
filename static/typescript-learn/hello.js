var Hello = /** @class */ (function () {
    function Hello() {
        this.name = "World";
    }
    Hello.prototype.greeting = function () {
        console.log("Hello " + this.name);
    };
    return Hello;
}());
new Hello().greeting();
