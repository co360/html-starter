/*
// https://we-are.bookmyshow.com/understanding-deep-and-shallow-copy-in-javascript-13438bad941c

 Shallow copy
 Shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.
 Deep copy
 A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.
 */
var employeeDetailsOriginal = {  name: 'Manjula', age: 25, Profession: 'Software Engineer' };
var employeeDetailsDuplicate = employeeDetailsOriginal; //Shallow copy!
var employeeDetailsDuplicate2 = { name: employeeDetailsOriginal.name, age: employeeDetailsOriginal.age, Profession: employeeDetailsOriginal.Profession}; //Deep copy!

employeeDetailsOriginal.name = "NameUpdated";
console.log("employeeDetailsOriginal: ", employeeDetailsOriginal);
console.log("employeeDetailsDuplicate: ", employeeDetailsDuplicate);
console.log("employeeDetailsDuplicate2: ", employeeDetailsDuplicate2);

// == Better deep copy
// For simple JSON objects, the simplest way would be:
var objectIsOld = {  name: 'Manjula', age: 25, Profession: 'Software Engineer' };
var objectIsNew = JSON.parse(JSON.stringify(objectIsOld));

objectIsOld.name = "NameUpdated";
console.log("objectIsOld: ", objectIsOld);
console.log("objectIsNew: ", objectIsNew);

// Pure JS for Deepcopy
function keepCloning(objectpassed) {
    if (objectpassed === null || typeof objectpassed !== 'object') {
        return objectpassed;
    }
    // give temporary-storage the original obj's constructor
    var temporaryStorage = objectpassed.constructor();
    for (var key in objectpassed) {
        temporaryStorage[key] = keepCloning(objectpassed[key]);
    }
    return temporaryStorage;
}
var employeeDetailsOriginal = {  name: 'Manjula', age: 25, Profession: 'Software Engineer' };
var employeeDetailsDuplicate = keepCloning(employeeDetailsOriginal);
employeeDetailsOriginal.name = "NameChanged";
console.log("employeeDetailsOriginal: ", employeeDetailsOriginal);
console.log("employeeDetailsDuplicate: ", employeeDetailsDuplicate);
