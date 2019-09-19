// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto

console.log("== Object's prototype property");
console.log("Object.prototype", Object.prototype);
console.log("Object.prototype.__proto__", Object.prototype.__proto__);
console.log("Object.__proto__", Object.__proto__);

console.log("== object's prototype property");
var emp = new function () {};
var object = new Object();
console.log("object, emp", object, emp);
console.log("object.prototype, emp.prototype", object.prototype, emp.prototype);
console.log("object.__proto__, emp.__proto__", object.__proto__, emp.__proto__);
console.log("'Object.getPrototypeOf(object)'", Object.getPrototypeOf(object));
console.log("'Object.getPrototypeOf(emp)'", Object.getPrototypeOf(emp));

console.log("== prototype compare");
console.log(object.__proto__ == Object.getPrototypeOf(new Object())); // TODO: Why this one is true?
