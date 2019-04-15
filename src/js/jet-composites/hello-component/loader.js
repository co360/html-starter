/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./hello-component-view.html', './hello-component-viewModel', 'text!./component.json', 'css!./hello-component-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('hello-component', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);