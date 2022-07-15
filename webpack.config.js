const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    homePage: './src/homePage.js',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};