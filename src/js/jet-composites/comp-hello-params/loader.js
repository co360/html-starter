/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./comp-hello-params-view.html', './comp-hello-params-viewModel', 'text!./component.json', 'css!./comp-hello-params-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('comp-hello-params', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);