'use strict';
define(
    ['ojs/ojarraydataprovider', 'knockout', 'jquery', 'ojL10n!./resources/nls/weather-card-js-strings'],
    function (ArrayDataProvider, ko, $, componentStrings) {

    function createForecastDataProvider() {
        let forecastPeriods = [];
        let url = "https://api.weather.gov/gridpoints/MLB/25,68/forecast";

        $.ajax({
            dataType: "json",
            url: url,
            async: false,
            success: function(data){
                data.properties.periods.slice(0, 5).forEach( (period) => {
                    let dateObj = new Date(period.startTime);
                    let dateString = (dateObj.getMonth()+1) + "-" + dateObj.getDate()  + "-" + dateObj.getFullYear();
                    period.shortDate = dateString;
                    forecastPeriods.push(period);
                });
            }
        });

        // console.log("forecastPeriods: ");
        // console.log(forecastPeriods);

        return new ArrayDataProvider(forecastPeriods, {keyAttributes: 'number'});
    }


    function WeatherCardJSViewModel(context) {
        let self = this;

        //At the start of your viewModel constructor
        let busyContext = oj.Context.getContext(context.element).getBusyContext();
        let options = {"description": "CCA Startup - Waiting for data"};
        self.busyResolve = busyContext.addBusyState(options);
        self.composite = context.element;
        self.properties = context.properties;
        self.res = componentStrings['hello-component'];

        // Get and setup weather data from API
        self.weatherForecast = createForecastDataProvider();


        //Once all startup and async activities have finished, relocate if there are any async activities
        self.busyResolve();
    }

    return WeatherCardJSViewModel;
});
