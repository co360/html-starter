requirejs.config({
        baseUrl: 'js',
        paths: {
            'knockout': '../../../web/js/libs/knockout/knockout-3.4.2.debug',
            'jquery': '../../../web/js/libs/jquery/jquery-3.3.1',
            'jqueryui-amd': '../../../web/js/libs/jquery/jqueryui-amd-1.12.1',
            'promise': '../../../web/js/libs/es6-promise/es6-promise',
            'ojs': '../../../web/js/libs/oj/v6.2.0/debug',
            'ojL10n': '../../../web/js/libs/oj/v6.2.0/ojL10n',
            'ojtranslations': '../../../web/js/libs/oj/v6.2.0/resources',
            'text': '../../../web/js/libs/require/text',
            'css': '../../../web/js/libs/require-css/css'
        },

        // Shim configurations for modules that do not expose AMD
        shim: {
            'jquery': {
                exports: ['jQuery', '$']
            }
        }
    }
);
