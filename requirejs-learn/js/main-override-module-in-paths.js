requirejs.config({
    baseUrl: "js",
    paths: {
        'hello': 'mymod1/hello', /* We are overriding the "js/hello.js" */
        'jquery': '../../../web/js/libs/jquery/jquery-3.3.1',
        'text': '../../../web/js/libs/require/text'
    }
});
