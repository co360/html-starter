define(['knockout'], function (ko) {
    function ControllerViewModel() {
        let self = this;

        self.button2Text = "Button 2";

        self.clickedButton = ko.observable("(None clicked yet)");
        self.buttonClick = function(event){
            self.clickedButton(event.currentTarget.id);
            return true;
        };
    }
    return new ControllerViewModel();
});
