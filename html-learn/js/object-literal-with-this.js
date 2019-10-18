/*
NOTE: The 'this' value inside a object literal function will reference to the same level
of object where function is defined. This means that if you nave nested object literal
then the 'this' value changes!

NOTE2: Fat arrow function has not 'this' value of its own. It will take the
nearest context of 'this'.
 */

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

// Same should work even if the properties is calculated (not constant string):
let o1b = {
    objectId: Math.random().toString(16).substr(2, 6),
    functionAccessThis: function () { // GOOD
        return this.objectId;
    }
};
console.log("o1b.functionAccessThis()", o1b.functionAccessThis());

console.log("== Accessing 'this' inside an object literal functions with nested object");
let o2 = {
    foo: "Foo",
    methods: {
        bar: "Bar",
        functionAccessThis: function () { // BAD
            return this.foo;
        },
        fatArrayAccessThis: () => { // BAD
            return this.foo;
        },
        functionAccessThisBar: function () { // GOOD
            return this.bar;
        },
    }
};
console.log("o2.methods.functionAccessThis()", o2.methods.functionAccessThis()); // undefined
console.log("o2.methods.fatArrayAccessThis()", o2.methods.fatArrayAccessThis()); // undefined
console.log("o2.methods.functionAccessThisBar()", o2.methods.functionAccessThisBar()); // 'Bar'

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

console.log("== Assign 'this' to object literal properties");
console.log("this", this);
this.objId = Math.random().toString(16); // globalThis
console.log("this again", this);
let o7 = {
    objId: Math.random().toString(16),
    thisObj: this, /* "this" is the globalThis" */
    propsString: function () {
        console.log("debug: thisObj", this.thisObj);
        return "thisObj=" + this.thisObj;
    }
};
console.log("o7", o7);
console.log("o7.propsString()", o7.propsString());

console.log("== Assign 'this' to object literal properties - nested");
let o8 = {
    objId: Math.random().toString(16),
    thisObj: this, /* "this" is the globalThis" */
    propsString: function () {
        console.log("debug: thisObj", this.thisObj);
        return "thisObj=" + this.thisObj;
    },
    nestedObj: {
        objId: Math.random().toString(16),
        thisObj: this, /* "this" is the globalThis", even though it's nested */
        propsString: function () {
            console.log("debug: nestedObj.thisObj", this.thisObj);
            return "nestedObj.thisObj=" + this.thisObj;
        }
    }
};
console.log("o8", o8);
console.log("o8.propsString()", o8.propsString());
console.log("o8.nestedObj.propsString()", o8.nestedObj.propsString());
