const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, './src'),
  mode: 'development',
  entry: {
    main: './index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './rs-selectors'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: './assets/level.json', to: './assets'},
        { from: './assets/rs_school_js.svg', to: './assets'},
        { from: './assets/vs.css', to: './assets'},
        { from: './assets/highlight.pack.js', to: './assets'},
        { from: './assets/**.png'},
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg|jpeg|gif|ico|wav|json)$/,
        use: ['file-loader'],
      },
      {
        test: /\.json$/,
        use: ['json-loader'],
      },
    ]
  },
};
