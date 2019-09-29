console.log("== Accessing 'this' inside an object literal functions");
let o1 = {
    foo: "Foo",
    functionAccessThis: function () { // GOOD
        return this.foo;
    },
    fatArrayAccessThis: () => { // BAD
        return this.foo;
    }
};
console.log("o1.functionAccessThis()", o1.functionAccessThis()); // Foo
console.log("o1.fatArrayAccessThis()", o1.fatArrayAccessThis()); // undefined

console.log("== Accessing 'this' inside an object literal functions with nested object");
let o2 = {
    foo: "Foo",
    methods: {
        functionAccessThis: function () { // BAD
            return this.foo;
        },
        fatArrayAccessThis: () => { // BAD
            return this.foo;
        }
    }
};
console.log("o2.methods.functionAccessThis()", o2.methods.functionAccessThis()); // undefined
console.log("o2.methods.fatArrayAccessThis()", o2.methods.fatArrayAccessThis()); // undefined

console.log("== Access 'this' outside an object literal functions");
// This should have same affect as defining functions inside object literal (example o1).
let o3 = {
  foo: "Foo"
};
o3.functionAccessThis = function() { // GOOD
    // We can use "this" in here, if this method is invoked by a class instance.
    // NOTE: This does not work if this method is an event handler, which will not be
    // called by class instance.
   return this.foo;
};
o3.fatArrayAccessThis = () => { // BAD
    return this.foo;
};
console.log("o3.functionAccessThis()", o3.functionAccessThis()); // Foo
console.log("o3.fatArrayAccessThis()", o3.fatArrayAccessThis()); // undefined

// == Object Literal Initializer With "this"
// More examples here: https://stackoverflow.com/questions/4616202/self-references-in-object-literals-initializers

// console.log("== Accessing 'this' inside object literal properties - BAD");
// let o4 = {
//     data: [1, 2, 3],
//     dataLength: this.data.length  // BAD - TypeError: Cannot read property 'length' of undefined
// };
// console.log("o4.dataLength", o4.dataLength);

console.log("== Accessing 'this' inside object literal properties - do not use it, but initialize value outside");
let o4 = {
    data: [1, 2, 3],
    dataLength: null
};
o4.dataLength = o4.data.length;
console.log("o4.dataLength", o4.dataLength);

console.log("== Accessing 'this' inside object literal properties - using init function");
let o5 = {
    data: [1, 2, 3],
    dataLength: null,
    init: function() {
        this.dataLength = this.data.length;
        return this; // Ensure you return this to initialized 'o5' var, else you get undefined!
    }
}.init();
console.log("o5.dataLength", o5.dataLength);

console.log("== Accessing 'this' inside object literal properties - using getter");
let o6 = {
    data: [1, 2, 3],
    get dataLength() { return this.data.length; }
};
console.log("o6.dataLength", o6.dataLength);
