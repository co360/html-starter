define(["require", "exports", "jquery", "ojs/ojcontext", "ojs/ojarraydataprovider"], function (require, exports, $, Context, ArrayDataProvider) {
    "use strict";
    var WeatherCardViewModel = /** @class */ (function () {
        function WeatherCardViewModel(context) {
            var self = this;
            var busyContext = Context.getContext(context.element).getBusyContext();
            var options = { "description": "CCA Startup - Waiting for data" };
            self.busyResolve = busyContext.addBusyState(options);
            self.composite = context.element;
            //Example observable
            self.properties = context.properties;
            //self.res = componentStrings['weather-card'];
            // Example for parsing context properties
            // if (context.properties.name) {
            //     parse the context properties here
            // }
            // Get and setup weather data from API
            self.weatherForecast = this.createForecastDataProvider();
            //Once all startup and async activities have finished, relocate if there are any async activities
            self.busyResolve();
        }
        WeatherCardViewModel.prototype.createForecastDataProvider = function () {
            var forecastPeriods = new Array();
            var api = "https://api.weather.gov/gridpoints/MLB/25,68/forecast";
            $.getJSON(api, function (data) {
                data.properties.periods.slice(0, 5).forEach(function (period) {
                    forecastPeriods.push(period);
                });
            });
            return new ArrayDataProvider(forecastPeriods, { keyAttributes: 'number' });
        };
        return WeatherCardViewModel;
    }());
    return WeatherCardViewModel;
});
