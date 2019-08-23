/*
DEMO: Use "underscore" as dependency
https://underscorejs.org/

npm install
npm run hello

*/

// Using underscore library functions
const _ = require("underscore");

var alert = function(args) { console.log(args); };

// == Collections
_.each([1, 2, 3], alert);
// => alerts each number in turn...
_.each({one: 1, two: 2, three: 3}, alert);
// => alerts each number value in turn...

// Alias collect
_.map([1, 2, 3], function(num){ return num * 3; });
// => [3, 6, 9]
_.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
// => [3, 6, 9]
_.map([[1, 2], [3, 4]], _.first);
// => [1, 3]

// Alias inject, foldl (foldLeft)
var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
// => 6

// Find first item
var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => 2

// Find all items
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => [2, 4, 6]


// == Array
_.uniq([1, 2, 1, 4, 1, 3]);
// => [1, 2, 4, 3]

_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
// => [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]

_.unzip([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]);
// => [['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]]

_.range(10);
// => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
_.range(1, 11);
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
_.range(0, 30, 5);
// => [0, 5, 10, 15, 20, 25]
_.range(0, -10, -1);
// => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
_.range(0);
// => []

