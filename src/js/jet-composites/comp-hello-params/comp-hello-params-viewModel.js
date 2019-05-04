/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
'use strict';
define(
    ['knockout', 'jquery', 'ojL10n!./resources/nls/comp-hello-params-strings'], function (ko, $, componentStrings) {
    
    function ExampleComponentModel(context) {
        var self = this;
        console.log("Component props:");
        console.log(context.properties);
    };

    return ExampleComponentModel;
});
