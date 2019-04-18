define(["require", "exports", "knockout", "jquery", "ojs/ojcontext"], function (require, exports, ko, $, Context) {
    "use strict";
    var Forecast = /** @class */ (function () {
        function Forecast() {
            this.periods = new Array();
        }
        return Forecast;
    }());
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
            self.weatherForecast = ko.observable(this.createWeatherForecast());
            //Once all startup and async activities have finished, relocate if there are any async activities
            self.busyResolve();
        }
        WeatherCardViewModel.prototype.createWeatherForecast = function () {
            var forecast = new Forecast();
            var api = "https://api.weather.gov/gridpoints/MLB/25,68/forecast";
            $.getJSON(api, function (data) {
                data.properties.periods.slice(0, 5).forEach(function (period) {
                    forecast.periods.push(period);
                });
            });
            return forecast;
        };
        return WeatherCardViewModel;
    }());
    return WeatherCardViewModel;
});
