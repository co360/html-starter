class Hello {
    name = "World";
    greeting() {
        console.log(`Hello ${this.name}`);
    }
}
new Hello().greeting();
