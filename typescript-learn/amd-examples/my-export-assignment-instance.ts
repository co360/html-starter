/*
Note that "export=" work differently for Class name vs Instance!
 */
class HelloAssignInstance {
    message = "Hello World";
    greeting() {
        console.log(this.message);
    }
}

// Exporting new instance directly
// export = new HelloAssignInstance();

// Exporting new instance using a indirect variable
// NOTE: For some reason this form allow user to use this import form:
//    import * as myInstance from "./my-export-assignment-instance";
let result = new HelloAssignInstance();
export = result;

