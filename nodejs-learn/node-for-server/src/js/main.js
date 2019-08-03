var viewModel = {
    helloMessage: ko.observable("Hello World")
};

$(function() {
    ko.applyBindings(viewModel);
});
