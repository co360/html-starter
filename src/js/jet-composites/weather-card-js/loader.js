/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./weather-card-js-view.html', './weather-card-js-viewModel', 'text!./component.json', 'css!./weather-card-js-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('weather-card-js', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);