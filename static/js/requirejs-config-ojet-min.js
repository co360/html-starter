requirejs.config({
        baseUrl: '/ojet-starter/static/js/ojet-app',
        paths: {
            'knockout': '/ojet-starter/web/js/libs/knockout/knockout-3.4.2.debug',
            'jquery': '/ojet-starter/web/js/libs/jquery/jquery-3.3.1',
            'jqueryui-amd': '/ojet-starter/web/js/libs/jquery/jqueryui-amd-1.12.1',
            'promise': '/ojet-starter/web/js/libs/es6-promise/es6-promise',
            'ojs': '/ojet-starter/web/js/libs/oj/v6.2.0/debug',
            'ojL10n': '/ojet-starter/web/js/libs/oj/v6.2.0/ojL10n',
            'ojtranslations': '/ojet-starter/web/js/libs/oj/v6.2.0/resources',
            'text': '/ojet-starter/web/js/libs/require/text',
            'css': '/ojet-starter/web/js/libs/require-css/css'
        },

        // Shim configurations for modules that do not expose AMD
        shim: {
            'jquery': {
                exports: ['jQuery', '$']
            }
        }
    }
);
