requirejs.config({
        baseUrl: 'js',
        paths: {
            'knockout': '../../../web/js/libs/knockout/knockout-3.4.2.debug',
            'jquery': '../../../web/js/libs/jquery/jquery-3.4.1',
            'jqueryui-amd': '../../../web/js/libs/jquery/jqueryui-amd-1.12.1',
            'promise': '../../../web/js/libs/es6-promise/es6-promise',
            'hammerjs': '../../../web/js/libs/hammer/hammer-2.0.8',
            'ojdnd': '../../../web/js/libs/dnd-polyfill/dnd-polyfill-1.0.0',
            'ojs': '../../../web/js/libs/oj/v6.2.0/debug',
            'ojL10n': '../../../web/js/libs/oj/v6.2.0/ojL10n',
            'ojtranslations': '../../../web/js/libs/oj/v6.2.0/resources',
            'text': '../../../web/js/libs/require/text',
            'signals': '../../../web/js/libs/js-signals/signals',
            'customElements': '../../../web/js/libs/webcomponents/custom-elements.min',
            'proj4': '../../../web/js/libs/proj4js/dist/proj4-src',
            'css': '../../../web/js/libs/require-css/css',
            'touchr': '../../../web/js/libs/touchr/touchr',
            'persist': '../../../web/js/libs/persist/min'
        },

        // Shim configurations for modules that do not expose AMD
        shim: {
            'jquery': {
                exports: ['jQuery', '$']
            }
        }
    }
);