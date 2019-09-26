class EventClickExample {

    name = "EventClickExample";

    constructor () {
        console.log("Setup click listeners");
        document.getElementById("box1").addEventListener('click', this.myClickEvent);
        document.getElementById("box2").addEventListener('click', this.myClickEvent2);
        document.getElementById("box3").addEventListener('click', this.myClickEvent3);
    }

    myClickEvent (event) {
        // BAD: The "this" is not bound to class instance! So output is "undefined"
        // This is because the function is an event handler that invoked by
        // event loop without the knowledge of the class instance.
        console.log(this.name + " myClickEvent", event);
    }

    // Class Member
    myClickEvent2 = function (event) {
        // This is same as myClickEvent
        // BAD: The "this" is not bound to class instance! So output is "undefined"
        console.log(this.name + " myClickEvent2", event);
    };

    myClickEvent3 = (event) => {
        // GOOD: This works because FAT arrow function does not affect "this", and it
        // will be pickup by nearby context, which is the class instance
        console.log(this.name + " myClickEvent3", event);
    };
}
