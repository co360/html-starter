// NOTE: This script is written as normal "NodeJS" script, hence we use
// the require("module") to bring in dependencies. But this script will
// be packaged by build process that will be used in browser env.

console.log(ko);
$(function() {
    $("#demo").text("Hello World.");
});
