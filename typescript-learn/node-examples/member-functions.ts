class MemberFunctionsExample {

    name = "Hello";

    constructor () {
        console.log("Constructor");
    }

    foo () {
        console.log(this.name + " foo.this", this);
    }

    // Class Member
    foo2 = function () {
        console.log(this.name + " foo2.this", this);
    };

    foo3 = () => {
        console.log(this.name + " foo3.this", this);
    };
}

var a = new MemberFunctionsExample();
a.foo();
a.foo2();
a.foo3();
