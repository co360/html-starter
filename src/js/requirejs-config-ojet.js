requirejs.config({
    baseUrl: 'js',
    paths: {
      'knockout': 'libs/knockout/knockout-3.4.2.debug',
      'jquery': 'libs/jquery/jquery-3.3.1',
      'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.1',
      'promise': 'libs/es6-promise/es6-promise',
      'hammerjs': 'libs/hammer/hammer-2.0.8',
      'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0',
      'ojs': 'libs/oj/v6.2.0/debug',
      'ojL10n': 'libs/oj/v6.2.0/ojL10n',
      'ojtranslations': 'libs/oj/v6.2.0/resources',
      'text': 'libs/require/text',
      'signals': 'libs/js-signals/signals',
      'customElements': 'libs/webcomponents/custom-elements.min',
      'proj4': 'libs/proj4js/dist/proj4-src',
      'css': 'libs/require-css/css',
      'touchr': 'libs/touchr/touchr',
      'persist': 'libs/persist/min'
    },

    // Shim configurations for modules that do not expose AMD
    shim: {
      'jquery': {
        exports: ['jQuery', '$']
      }
    }
  }
);
