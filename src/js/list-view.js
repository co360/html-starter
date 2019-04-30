require(['knockout', 'ojs/ojcore', 'ojs/ojknockout',
        'ojs/ojcore', 'ojs/ojknockout', 'ojs/ojlistview'],
    function (ko, app) {

        function AppViewModel() {
            var self = this;

            // Demo Banes - Used by index to create a list if links
            self.demoNames = [
                'bind-text', 'button', 'hello-ts',
                'hello-component', 'demo-card',
                'weather-card-js', 'weather-card'
            ];
        }

        ko.applyBindings(new AppViewModel());
    }
);


