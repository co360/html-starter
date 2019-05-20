requirejs.config({
        baseUrl: '/ojet-starter/static/js/ojet-app',
        paths: {
            'knockout': '/ojet-starter/web/js/libs/knockout/knockout-3.4.2.debug',
            'jquery': '/ojet-starter/web/js/libs/jquery/jquery-3.3.1',
            'jqueryui-amd': '/ojet-starter/web/js/libs/jquery/jqueryui-amd-1.12.1',
            'promise': '/ojet-starter/web/js/libs/es6-promise/es6-promise',
            'hammerjs': '/ojet-starter/web/js/libs/hammer/hammer-2.0.8',
            'ojdnd': '/ojet-starter/web/js/libs/dnd-polyfill/dnd-polyfill-1.0.0',
            'ojs': '/ojet-starter/web/js/libs/oj/v6.2.0/debug',
            'ojL10n': '/ojet-starter/web/js/libs/oj/v6.2.0/ojL10n',
            'ojtranslations': '/ojet-starter/web/js/libs/oj/v6.2.0/resources',
            'text': '/ojet-starter/web/js/libs/require/text',
            'signals': '/ojet-starter/web/js/libs/js-signals/signals',
            'customElements': '/ojet-starter/web/js/libs/webcomponents/custom-elements.min',
            'proj4': '/ojet-starter/web/js/libs/proj4js/dist/proj4-src',
            'css': '/ojet-starter/web/js/libs/require-css/css',
            'touchr': '/ojet-starter/web/js/libs/touchr/touchr',
            'persist': '/ojet-starter/web/js/libs/persist/min'
        },

        // Shim configurations for modules that do not expose AMD
        shim: {
            'jquery': {
                exports: ['jQuery', '$']
            }
        }
    }
);
