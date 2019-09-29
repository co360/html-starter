console.log("== Accessing 'this' inside an object literal");
let o1 = {
    foo: "Foo",
    functionAccessThis: function () {
        return this.foo;
    },
    fatArrayAccessThis: () => {
        return this.foo;
    }
};
console.log("o1.functionAccessThis()", o1.functionAccessThis()); // Foo
console.log("o1.fatArrayAccessThis()", o1.fatArrayAccessThis()); // Undefined

console.log("== Accessing 'this' inside an object literal with nested object");
let o2 = {
    foo: "Foo",
    methods: {
        functionAccessThis: function () {
            return this.foo;
        },
        fatArrayAccessThis: () => {
            return this.foo;
        }
    }
};
console.log("o2.methods.functionAccessThis()", o2.methods.functionAccessThis()); // Undefined
console.log("o2.methods.fatArrayAccessThis()", o2.methods.fatArrayAccessThis()); // Undefined

console.log("== Access 'this' in function defined outside of object literal");
// This should have same affect as defining functions inside object literal (example o1).
let o3 = {
  foo: "Foo"
};
o3.functionAccessThis = function() {
    // We can use "this" in here, if this method is invoked by a class instance.
    // NOTE: This does not work if this method is an event handler, which will not be
    // called by class instance.
   return this.foo;
};
o3.fatArrayAccessThis = () => {
    return this.foo;
};
console.log("o3.functionAccessThis()", o3.functionAccessThis()); // Foo
console.log("o3.fatArrayAccessThis()", o3.fatArrayAccessThis()); // Undefined
