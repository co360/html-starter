// Object type declaration
//declare function create(o: object | null): void;
function create(o) {
    console.log("Creating object:=", o);
}
var MyData = /** @class */ (function () {
    function MyData() {
    }
    MyData.prototype.demoTypes = function () {
        // Boolean
        var isDone = false;
        // Numbers
        var decimal = 6;
        var hex = 0xf00d;
        var binary = 10;
        var octal = 484;
        var n1 = 6.00;
        var n2 = 6;
        console.log("Compare n1 == n2", n1 == n2);
        // String
        var color = "blue";
        color = 'red';
        console.log("color=", color);
        var fullName = "Bob Bobbington";
        var age = 37;
        var sentence = "Hello, my name is " + fullName + ".";
        console.log("sentence", sentence);
        // List/Array
        console.log("List demos");
        var list = [1, 2, 3];
        console.log(list);
        var list2 = [1, 2, 3];
        console.log(list2);
        var list3 = [1, 2, 3];
        console.log(list3);
        // Declare a tuple type
        var x;
        // Initialize it
        x = ["hello", 10]; // OK
        // Initialize it incorrectly
        //x = [10, "hello"]; // Error
        var Color;
        (function (Color) {
            Color[Color["Red"] = 0] = "Red";
            Color[Color["Green"] = 1] = "Green";
            Color[Color["Blue"] = 2] = "Blue";
        })(Color || (Color = {}));
        var c = Color.Green;
        console.log("Enum", c);
        // Any type
        var notSure = 4;
        notSure = "maybe a string instead";
        notSure = false; // okay, definitely a boolean
        // object type
        console.log("Object type");
        create({ prop: 0 }); // OK
        create(null); // OK
        // create(42); // Error
        // create("string"); // Error
        // create(false); // Error
        // create(undefined); // Error
        // Type cast/assertion
        var someValue = "this is a string";
        var strLength = someValue.length;
        console.log("strLength=", strLength);
        // alternative of cast using 'as'
        var someValue2 = "this is a string";
        var strLength2 = someValue.length;
    };
    return MyData;
}());
new MyData().demoTypes();
