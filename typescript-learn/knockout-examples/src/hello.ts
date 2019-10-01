import * as ko from 'knockout';
import {Observable} from "knockout";
import {Computed} from "knockout";

class Hello {
	name: Observable<string> = ko.observable<string>();
	capName: Computed<string>;
	numbers = ko.observableArray<number>();

	constructor (name) {
		let self = this;
		this.name(name);
		this.capName = ko.computed(function () {
			return self.name().toUpperCase();
		});
		this.numbers.push(3);
		this.numbers.push(2);
		this.numbers.push(1);
	}
	greeting () {
		return "Hello " + this.name();
	}
	test () {
		// Use this area for IDE to inspect the "this.name" variable.
		//this.name.valueHasMutated()
	}
}

let hello = new Hello("World");
console.log(hello.greeting());
// hello.test();
