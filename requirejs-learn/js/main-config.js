// This script only configure RequireJS and not loading any application code.
requirejs.config({
    baseUrl: "js",

    /*
    NOTE these paths are in relative to the "baseUrl"!
    */
    paths: {
        'jquery': '../../resources/js/libs/jquery/jquery-3.4.1',
        'text': '../resources/js/libs/require/text'
    }
});
