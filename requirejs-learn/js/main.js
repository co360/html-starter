// NOTE that "requriejs" is an alias to "require"! So
// you can just as well use "require.config". I personally think "requirejs"
// is more clear though.
//
// A main.js is usually and can be loaded using data-main attribute in the script
// tag. It also would include the bootstrap code for an application.
requirejs.config({
    baseUrl: "js",

    /*
    NOTE these paths are in relative to the "baseUrl"!
    */
    paths: {
        'jquery': '../../resources/js/libs/jquery/jquery-3.4.1',
        'text': '../../resources/js/libs/require/text'
    }
});

require(['jquery'], function($){
    $(function(){
        $("#main").text("Hello World.");
    });
});
