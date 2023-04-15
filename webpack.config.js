const path = require('path');
const { merge } = require('webpack-merge');

// Import the default configuration
const defaultConfig = require('@craco/craco/lib/webpack-config');

module.exports = (env) => {
  return merge(defaultConfig, {
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify')
      }
    }
  });
};
