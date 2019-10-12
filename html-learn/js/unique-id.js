// https://gist.github.com/gordonbrander/2230317

/*
NOTE: This is okay for generating less than 10 thousand unique IDs, but any more than 10 thousand and you
are going to run into collisions.
 */
var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};

console.log(ID());
console.log(ID());
console.log(ID());
