import helloAssignInstance = require("./my-export-assignment-instance");
console.log(helloAssignInstance);

// Using different import form:
// Note this form require you to export module instance with a indirect
// variable!
import * as helloAssignInstance2 from "./my-export-assignment-instance";
console.log(helloAssignInstance2);
