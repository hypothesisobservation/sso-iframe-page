const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      scriptLoading: 'module'
    })
  ],
  experiments: {
    outputModule: true,
  },
  externalsType: 'module',
  externals: {
    webpackNumbers: 'https://sso-webpack-lib.onrender.com/index.bundle.js',
  },
};