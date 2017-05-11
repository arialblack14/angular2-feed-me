var webpackConfig = require('./webpack/webpack.test');

module.exports = function (config) {
  var _config = {
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      {pattern: './config/karma-test-shim.js', watched: false}
    ],
    preprocessors: {
      './config/karma-test-shim.js': ['coverage', 'webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    webpackServer: {
      noInfo: true
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    // travis specific configuration
    customLaunchers: {
      ChromeTravisCi: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    singleRun: true, // if true, Karma captures browsers, runs the tests and exits
    failOnEmptyTestSuite: false
  };

  if (process.env.TRAVIS) {
    _config.browsers = [
      'ChromeTravisCi'
    ];
  }

  config.set(_config);
};
