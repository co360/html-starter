define(['knockout'], function (ko) {
    function ControllerViewModel() {
        let self = this;
        self.helloMessage = ko.observable("Hello OJET World");
    }
    return new ControllerViewModel();
});
