define(["require", "exports", "knockout", "ojs/ojcontext"], function (require, exports, ko, Context) {
    "use strict";
    //import componentStrings = require('ojL10n!./resources/nls/weather-card-strings');
    var WeatherCardViewModel = /** @class */ (function () {
        function WeatherCardViewModel(context) {
            var self = this;
            var busyContext = Context.getContext(context.element).getBusyContext();
            var options = { "description": "CCA Startup - Waiting for data" };
            self.busyResolve = busyContext.addBusyState(options);
            self.composite = context.element;
            //Example observable
            self.messageText = ko.observable('Hello from Example Component');
            self.properties = context.properties;
            //self.res = componentStrings['weather-card'];
            // Example for parsing context properties
            // if (context.properties.name) {
            //     parse the context properties here
            // }
            //Once all startup and async activities have finished, relocate if there are any async activities
            self.busyResolve();
        }
        return WeatherCardViewModel;
    }());
    ;
    return WeatherCardViewModel;
});
//# sourceMappingURL=weather-card-viewModel.js.map