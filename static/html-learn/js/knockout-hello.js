define(['knockout'], function (ko) {
    function AppViewModel() {
        let self = this;
        self.helloMessage = ko.observable("Hello KO World");
    }
    return new AppViewModel();
});
