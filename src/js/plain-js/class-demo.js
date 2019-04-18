function Demo() {
    this.message = "Hello World";
    this.greet = function() {
        console.log(this.message);
    }
}
let d = new Demo();
d.greet();
