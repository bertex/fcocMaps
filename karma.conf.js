//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'ShowMap/lib/angular/angular.js',
      'ShowMap/lib/angular-route/angular-route.js',
      '../node_modules/angular-mocks/angular-mocks.js',
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ]

  });
};
