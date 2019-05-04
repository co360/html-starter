define(['knockout'], function(ko) {
    function viewModel(viewParams) {
        let self = this;
        self.helloMessage = 'Hello World';

        //console.log(viewParams);
    }
    return viewModel;
});
