/*
 https://docs.oracle.com/middleware/jet400/jet/developer/GUID-219A636B-0D0B-4A78-975B-0528497A82DD.htm#JETDG-GUID-219A636B-0D0B-4A78-975B-0528497A82DD

TODO: Why this is not working???
 */
requirejs.config({
    baseUrl: 'js',
    // Path mappings for the logical module names
    paths: {
        "jquery": "https://static.oracle.com/cdn/jet/v4.0.0/3rdparty/jquery/jquery-3.1.1.min",
        "knockout": "https://static.oracle.com/cdn/jet/v4.0.0/3rdparty/knockout/knockout-3.4.0",
        "promise": "https://static.oracle.com/cdn/jet/v4.0.0/3rdparty/es6-promise/es6-promise.min",
        "ojL10n": "https://static.oracle.com/cdn/jet/v4.0.0/default/js/ojL10n",
        "ojtranslations": "https://static.oracle.com/cdn/jet/v4.0.0/default/js/resources",
        "ojs": "https://static.oracle.com/cdn/jet/v4.0.0/default/js/min",
        "jqueryui-amd": "https://static.oracle.com/cdn/jet/v4.0.0/3rdparty/jquery/jqueryui-amd-1.12.0.min",

        "text": "https://static.oracle.com/cdn/jet/v4.0.0/3rdparty/require/text",
        "hammerjs": "https://static.oracle.com/cdn/jet/v4.0.0/3rdparty/hammer/hammer-2.0.8.min",
        "signals": "https://static.oracle.com/cdn/jet/v4.0.0/3rdparty/js-signals/signals.min",
        "ojdnd": "https://static.oracle.com/cdn/jet/v4.0.0/3rdparty/dnd-polyfill/dnd-polyfill-1.0.0.min",
        "css": "https://static.oracle.com/cdn/jet/v4.0.0/3rdparty/require-css/css.min",
        "customElements": "https://static.oracle.com/cdn/jet/v4.0.0/3rdparty/webcomponents/custom-elements.min",
        "proj4": "https://static.oracle.com/cdn/jet/v4.0.0/3rdparty/proj4js/dist/proj4",
        // "touchr": "https://static.oracle.com/cdn/jet/v4.0.0/3rdparty/touchr/touchr",
        // "persist": "https://static.oracle.com/cdn/jet/v4.0.0/3rdparty/persist/min",
    },

    // Shim configurations for modules that do not expose AMD
    shim: {
        'jquery': {
            exports: ['jQuery', '$']
        }
    }
});
