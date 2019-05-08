/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./my-resource-comp-consumer-view.html', './my-resource-comp-consumer-viewModel', 'text!./component.json', 'css!./my-resource-comp-consumer-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('my-resource-comp-consumer', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);