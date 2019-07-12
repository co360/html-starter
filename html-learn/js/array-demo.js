let a = [1, 2, 5, 4, 3];
console.log(`Array.sort(): `, a.sort());
console.log(`Array.filter(item => item > 3)): `, a.filter(item => item > 3));
console.log(`Array.map(item => 'Item#' + item)): `, a.map(item => 'Item#' + item));

// Convert array to map
// https://stackoverflow.com/questions/26264956/convert-object-array-to-hash-map-indexed-by-an-attribute-value-of-the-object
let result = a.reduce((obj, item) => { obj[item] = "Item#" + item; return obj; }, {});
console.log("Array to map: ", result);

