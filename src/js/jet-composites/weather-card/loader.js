/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./weather-card-view.html', './weather-card-viewModel', 'text!./component.json', 'css!./weather-card-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('weather-card', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);