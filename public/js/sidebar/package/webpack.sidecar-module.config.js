const path = require('path');
const webpackConfig = require('./webpack.config');

module.exports = {
  ...webpackConfig,
  entry: './src/index.module.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'sidecar-module.js',
    library: 'sidecar',
    libraryTarget: 'umd'
  }
};
