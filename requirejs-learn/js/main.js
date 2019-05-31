// NOTE that "requriejs" is an alias to "require"! So
// you can just as well use "require.config". I personally think "requirejs"
// is more clear though.
requirejs.config({
    baseUrl: "js",

    /*
    NOTE these paths are in relative to the "baseUrl"!
    */
    paths: {
        'jquery': '../../../web/js/libs/jquery/jquery-3.3.1',
        'text': '../../../web/js/libs/require/text'
    }
});
