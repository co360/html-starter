define(['knockout'], function (ko) {
    function AppViewModel() {
        let self = this;
        self.helloMessage = ko.observable("Hello OJET World");
    }
    return new AppViewModel();
});
