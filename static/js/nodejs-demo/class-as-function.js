
// We call "MyClass" as constructor function!
function MyClass() {
    this.p1 = "p1";
    this.p2 = true;
}
console.log(new MyClass());
console.log(MyClass()); // can't do this, it will return "undefined"

// ES6 "class" syntax is same as above!
class MyClass2 {
    constructor() {
        this.p1 = "p1";
        this.p2 = true;
    }
}
console.log(new MyClass2());
// console.log(MyClass2()); // TypeError, you can't do this!
