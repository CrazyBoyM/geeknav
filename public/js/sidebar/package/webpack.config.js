const path = require('path');
const webpack = require('webpack');
const manifest = require('./package.json');

const commentHeader = 'Gitter Sidecar v' + manifest.version + '\nhttps://sidecar.gitter.im/';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'sidecar.js',
    library: 'sidecar'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'css-loader!postcss-loader'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(commentHeader)
  ]
};
