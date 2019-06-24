// This script only configure RequireJS and not loading any application code.
requirejs.config({
    baseUrl: "js",
    paths: {
        'classic-ckeditor': 'https://cdn.ckeditor.com/ckeditor5/12.2.0/classic/ckeditor',
        'inline-ckeditor': 'https://cdn.ckeditor.com/ckeditor5/12.2.0/inline/ckeditor',
        'jquery': '../../resources/js/libs/jquery/jquery-3.4.1',
        'text': '../../resources/js/libs/require/text'
    }
});
