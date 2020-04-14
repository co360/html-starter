## JS Testing Frameworks

* What is Unit Testing
** assertion lib (  assert.equals(one, two); ) => expect lib => BDD "give I have two" => should output
** test case setup (method)
** mock service/test model
** tests suite
** test runner

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
* Mocha (test runner)
    ** Chai - assertion lib (assert, expect, bdd style)
    ** SinonJS - mock and stub lib
* Karma (integrate - Mocha Runner/Reporter/CI integration) - real devices testing (browser/mobile phone)
    ** Run tests on real Devices
    ** Remote control tests
    ** Integrate with other test frameworks
    ** Code coverage generator

## End to End Testing Frameworks
* Selenium Web Driver
* NightwatchJS
