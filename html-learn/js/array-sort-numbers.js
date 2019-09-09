// JS array sort
// The sort() method sorts the elements of an array in place and returns the sorted array.
//
// Note that the array is sorted in place, and no copy is made.
//

var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

var array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4] // NOTE THIS IS NOT WHAT WANT!

// NOTE: JS Array.sort will sort alphabetically only! To sort numerically,
// you need to write your own custom sort function
console.log(array1.sort((e1, e2) => e1 - e2)); // ASC Order
console.log(array1.sort((e1, e2) => e2 - e1)); // DES Order

console.log("Shuffle: ", array1.sort((a, b) => Math.random() - 0.5));
console.log("Shuffle: ", array1.sort((a, b) => Math.random() - 0.5));
console.log("Shuffle: ", array1.sort((a, b) => Math.random() - 0.5));
