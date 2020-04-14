## JS Testing Frameworks

There is SO many testing frameworks out there, it's super confusing to pick one to use. I will
separate them into two categories: standalone (battery included) vs meta-framework (ones
requires other libraries).

## Standalone Testing Frameworks
(It should have everything you need including assertions, mocking, runner, reports and etc.)
* qUnit  (used by jQuery)
* Jasmine (used by Knockout, Vue2)
* Jest (used by Vue3)
* Cucumber (BDD framework - Plain language testing)

## Meta-Framework/Testing Frameworks
(It's flexible that it let you choose what you need. But you need to manage the dependencies.)
* Mocha
    ** Chai - assertion lib
    ** SinonJS - mock and stub lib
* Karma
    ** Run tests on real Devices
    ** Remote control tests
    ** Integrate with other test frameworks
    ** Code coverage generator

## End to End Testing Framework
* Selenium Web Driver
* NightwatchJS
