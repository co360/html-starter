// Change the 'this' value with function.bind!
let o1 = {
    objectId: Math.random().toString(16),
    test: function () {
        return "Test objectId " + this.objectId;
    }
};
let o2 = {
    objectId: Math.random().toString(16),
};
let o2Test = o1.test.bind(o2);

console.log("o1.test", o1.test());
console.log("o2Test", o2Test());
console.log("o1.test", o1.test());
console.log("o2Test", o2Test());
