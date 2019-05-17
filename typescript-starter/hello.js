class Hello {
    constructor() {
        this.name = "World";
    }
    greeting() {
        console.log(`Hello ${this.name}`);
    }
}
new Hello().greeting();
