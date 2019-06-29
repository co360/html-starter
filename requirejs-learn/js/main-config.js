// This script only configure RequireJS and not loading any application code.
requirejs.config({
    baseUrl: "js",
    paths: {
        'jquery': '../../resources/js/libs/jquery/jquery-3.4.1',
        'text': '../../resources/js/libs/require/text',
        'css': '../../resources/js/libs/require-css/css',
        'domReady': '../../resources/js/libs/require/domReady'
    }
});
