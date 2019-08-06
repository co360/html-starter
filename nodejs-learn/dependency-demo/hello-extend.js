const _ = require("underscore");

function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
}
Person.prototype.greeting = function() {
    return "Hello " + this.firstName + " " + this.lastName;
};

function test() {
    let e = new Person("Zemian", "Deng");
    console.log(e);
    _.keys(e).forEach((i)=> console.log(i));
}
test();

// TODO: How extends class with underscore?
function testExtension() {
    let Employee = function() {};
    Employee = _.extend(Employee, Person);
}
