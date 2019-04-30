require(['knockout', 'ojs/ojcore', 'ojs/ojknockout',
        'ojs/ojcore', 'ojs/ojknockout', 'ojs/ojlistview'],
    function (ko, app) {

        function AppViewModel() {
            var self = this;

            // Demo Banes - Used by index to create a list if links
            self.demoNames = [
                'bind-text', 'button-demo', 'button-label', 'button',
                'demo-card', 'hello-component', 'index-shell', 'hello-ts',
                'weather-card', 'weather-card-js'
            ];
        }

        ko.applyBindings(new AppViewModel());
    }
);


