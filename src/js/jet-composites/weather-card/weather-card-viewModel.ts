import ko = require('knockout');
import Context = require("ojs/ojcontext");
import Composite = require("ojs/ojcomposite");

//TODO: How do we import RequireJS plugin?
//import componentStrings = require('ojL10n!./resources/nls/weather-card-strings');

class WeatherCardViewModel {
	busyResolve: () => void;
	composite: Element;
	messageText: KnockoutObservable<string>;
	properties: Composite.PropertiesType;

	constructor(context :Composite.ViewModelContext) {
		
		let self = this;
		let busyContext = Context.getContext(context.element).getBusyContext();

        let options = {"description": "CCA Startup - Waiting for data"};
        self.busyResolve = busyContext.addBusyState(options);

        self.composite = context.element;

        //Example observable
        self.messageText = ko.observable('Current Temperature is 89 degree.');
        self.properties = context.properties;
        //self.res = componentStrings['weather-card'];

        // Example for parsing context properties
        // if (context.properties.name) {
        //     parse the context properties here
        // }

        //Once all startup and async activities have finished, relocate if there are any async activities
        self.busyResolve();
	}
}
export = WeatherCardViewModel
