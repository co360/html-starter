/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./comp-hello-view.html', './comp-hello-viewModel', 'text!./component.json', 'css!./comp-hello-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('comp-hello', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);