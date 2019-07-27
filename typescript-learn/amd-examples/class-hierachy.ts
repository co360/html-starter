export interface MyInterface {
    hello();
}
export class MyBase {
}
export class MyMiddleBase extends MyBase implements MyInterface {
    hello() {
        console.log("Hello World");
    }
}
export class MyClass extends MyMiddleBase{
}
