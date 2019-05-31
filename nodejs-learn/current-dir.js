// https://nodejs.org/docs/latest/api/modules.html#modules_dirname
// Both "__filename" and "__dirname" are for module file location

console.log(__filename);

path = require("path");
console.log(__dirname);
// same as:
console.log(path.dirname(__filename));
