var o1 = {
    el: '#app',
    data: {
        message: "Hello"
    }
};
console.log("o1.data.message", o1.data.message);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
var o2 = {
    el: '#app',
    data: {
        message: "Hello",
        /* message2: `${message} World.`, This is invalid syntax! */
        message3: `${this.message} World.`, // This will resulted in "undefined World"!
        get message4() {
            return `${this.message} World.`;
        },
        message5: function() {
            return `${this.message} World again.`;
        },
        message6: function() {
            return `${this.message4} nested.`;
        },

        myList: [1,2,3],
        /* myListLen: this.myList.length THIS WILL NOT WORK! */
        get myListLen() { return this.myList.length }
    }
};
console.log("o2.data.message", o2.data.message);
console.log("o2.data.message3", o2.data.message3);
console.log("o2.data.message4", o2.data.message4);
console.log("o2.data.message5", o2.data.message5());
console.log("o2.data.message6", o2.data.message6());
console.log("o2.data.myListLen", o2.data.myListLen);
