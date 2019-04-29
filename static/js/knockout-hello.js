define(['knockout'], function (ko) {
    function ControllerViewModel() {
        let self = this;
        self.helloMessage = ko.observable("Hello KO World");
    }
    return new ControllerViewModel();
});
