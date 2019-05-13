define(function(require, exports, module) {
    console.log("We are simulating CommonJS env:");
    console.log(require, exports, module);
    return function() {};
});
