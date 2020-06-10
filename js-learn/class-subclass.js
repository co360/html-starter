// Old JS (before ES6/ES2015) does not have class, but it has constructor function
function Person (name) {
    this.name = name;
}
Person.prototype.greeting = function () {
    return "Hello " + this.name;
};

// Define sub-class
function Employee (name, title) {
    Person.call(this, name);
    this.title = title;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

var employee = new Employee("Zemian", "Developer");
console.log("employee", employee);
console.log("employee.greeting()", employee.greeting());
