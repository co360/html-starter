/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojknockout'],
  function(oj, ko) {
     function ControllerViewModel() {
       var self = this;

       // Media queries for repsonsive layouts
       var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
       self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

       // Header
       // Application Name used in Branding Area
       self.appName = ko.observable("App Name");
       // User Info used in Global Navigation area
       self.userLogin = ko.observable("john.hancock@oracle.com");

       // Demo Banes - Used by index to create a list if links
       self.demoNames = [
           'bind-text', 'button-demo', 'button-label', 'button',
           'demo-card', 'hello-component', 'index-shell', 'hello-ts',
           'weather-card', 'weather-card-js'
       ];

       // Footer
       function footerLink(name, id, linkTarget) {
         this.name = name;
         this.linkId = id;
         this.linkTarget = linkTarget;
       }
       self.footerLinks = ko.observableArray([
         new footerLink('About Oracle', 'aboutOracle', 'http://www.oracle.com/us/corporate/index.html#menu-about'),
         new footerLink('Contact Us', 'contactUs', 'http://www.oracle.com/us/corporate/contact/index.html'),
         new footerLink('Legal Notices', 'legalNotices', 'http://www.oracle.com/us/legal/index.html'),
         new footerLink('Terms Of Use', 'termsOfUse', 'http://www.oracle.com/us/legal/terms/index.html'),
         new footerLink('Your Privacy Rights', 'yourPrivacyRights', 'http://www.oracle.com/us/legal/privacy/index.html')
       ]);
     }

     return new ControllerViewModel();
  }
);
