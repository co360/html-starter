import ko = require('knockout');
import $ = require('jquery');
import Context = require("ojs/ojcontext");
import Composite = require("ojs/ojcomposite");

//TODO: How do we import RequireJS plugin?
//import componentStrings = require('ojL10n!./resources/nls/weather-card-strings');

interface ForecastPeriod {
	startTime: string;
	number: number;
	name: string;
	temperature: number;
	windSpeed: string;
	shortForecast: string;
}
class Forecast {
	periods = new Array<ForecastPeriod>();
}
class WeatherCardViewModel {
	busyResolve: () => void;
	composite: Element;
	properties: Composite.PropertiesType;
	weatherForecast: KnockoutObservable<Forecast>;

	constructor(context :Composite.ViewModelContext) {
		
		let self = this;
		let busyContext = Context.getContext(context.element).getBusyContext();

        let options = {"description": "CCA Startup - Waiting for data"};
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

	createWeatherForecast() :Forecast {
		let forecast = new Forecast();
		let api = "https://api.weather.gov/gridpoints/MLB/25,68/forecast";
		$.getJSON(api, function(data){
			data.properties.periods.slice(0, 5).forEach( (period: ForecastPeriod) => {
				forecast.periods.push(period);
			});

		});
		return forecast;
	}
}
export = WeatherCardViewModel
