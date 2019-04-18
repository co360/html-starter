define(function(require, exports, module) {
   console.log("Setting up 'hello-mod' module.");
   console.log("Args types: " + [typeof require, typeof exports, typeof module]);
   return {
       message: "Hello"
   }
});
