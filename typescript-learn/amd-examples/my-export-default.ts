/*
The difference between "export" and "export default" are:

- "export" is for multiple names to be exported in a file, and the name MUST be
matching when importing for use.
- "export default" is for single name exported in a file, and the name CAN be
renamed to any value when importing for use.
 */
export default class Hello5 {
    message = "Hello World";
    greeting() {
        console.log(this.message);
    }
}
