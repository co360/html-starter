// NOTE: We are in browser env, so DOM API and all global "window" vars are available

// This script is loaded by index.html, which include the following libraries
// - RequireJS, Knockout and jQuery. So we are free to use these.

requirejs.config({
    baseUrl: './',
    paths: {
        'knockout': 'web/js/libs/knockout/knockout-latest',
        'jquery': 'web/js/libs/jquery.min'
    }
});

require(['jquery', 'knockout'], function($, ko) {
    $(function() {
        var viewModel = {
            helloMessage: ko.observable("Hello World")
        };
        ko.applyBindings(viewModel);
    });
});
