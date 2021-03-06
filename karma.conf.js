module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'node_modules/es6-shim/es6-shim.min.js',
      'node_modules/mockfirebase/browser/mockfirebase.js',
      'karma.entry.js'
    ],

    preprocessors: {
      'karma.entry.js': ['webpack', 'sourcemap']
    },

    // webpack config
    webpack: require('./webpack.test'),

    // webpack server config
    webpackServer: {
      noInfo: true
    },

    reporters: ['dots'],

    logLevel: config.LOG_INFO,

    browserNoActivityTimeout: 180000, // 3 mins

    autoWatch: true,

    singleRun: false,

    customLaunchers: {
      TRAVIS_CHROME: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    browsers: process.env.TRAVIS ? ['TRAVIS_CHROME'] : ['Chrome']
  });
};
