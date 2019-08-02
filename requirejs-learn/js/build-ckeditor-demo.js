// Demonstration on loading ckeditor using requirejs.

// requirejs.config({
//     baseUrl: "js",
//
//     /*
//     NOTE these paths are in relative to the "baseUrl"!
//     */
//     paths: {
//         'jquery': '../../resources/js/libs/jquery/jquery-3.4.1',
//         'text': '../../resources/js/libs/require/text',
//         'ckeditor': '../../resources/js/libs/ckeditor/classic/ckeditor'
//     }
// });

var CKEDITOR_BASEPATH = '../../resources/js/libs/ckeditor/classic';
require(['jquery', 'ckeditor'], function($, ckeditor){
    $(function(){
        console.log("CKEditor demo: " + ckeditor);
    });
});
