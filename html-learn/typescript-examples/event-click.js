var EventClickExample = /** @class */ (function () {
    function EventClickExample() {
        var _this = this;
        this.name = "EventClickExample";
        // Class Member
        this.myClickEvent2 = function (event) {
            // This is same as myClickEvent
            // BAD: The "this" is not bound to class instance! So output is "undefined"
            console.log(this.name + " myClickEvent2", event);
        };
        this.myClickEvent3 = function (event) {
            console.log(_this.name + " myClickEvent3", event);
        };
        console.log("Setup click listeners");
        document.getElementById("box1").addEventListener('click', this.myClickEvent);
        document.getElementById("box2").addEventListener('click', this.myClickEvent2);
        document.getElementById("box3").addEventListener('click', this.myClickEvent3);
    }
    EventClickExample.prototype.myClickEvent = function (event) {
        // BAD: The "this" is not bound to class instance! So output is "undefined"
        console.log(this.name + " myClickEvent", event);
    };
    return EventClickExample;
}());
