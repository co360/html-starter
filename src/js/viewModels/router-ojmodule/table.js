define(['knockout', 'ojs/ojcore', 'ojs/ojknockout', 'ojs/ojbutton'], function (ko) {
    function AppViewModel() {
        let self = this;

        self.clickedButton = ko.observable("(None clicked yet)");
        self.buttonClick = function (event) {
            self.clickedButton(event.currentTarget.id);
        };
    }
    return AppViewModel;
});
