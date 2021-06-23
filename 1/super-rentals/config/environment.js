'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'super-rentals',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }
  
  ENV.MAPBOX_TOKEN = 'pk.eyJ1Ijoia2VpYW5yYW8iLCJhIjoiY2txOXZqY2cyMDkzZTMwbzMzdGt0YmVteiJ9.H8vhytaq5AOSAcLOq1Z6iQ';
  // This token has its scope set for only static images. Normally, we
  // wouldn't upload tokens to a public repository. Also, Mapbox can
  // restrict use of a token to one domain, which I guess would be
  // alright to use for prod, showing the token in the repository.

  return ENV;
};
