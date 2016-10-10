var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

 var HtmlWebpackPlugin = require('html-webpack-plugin');
 var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
   template: __dirname + '/src/client/index.html',
   filename: 'index.html',
   inject: 'body'
 });


var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
   entry: [
   APP_DIR + '/index.jsx'
   ],
   output: {
     path: BUILD_DIR,
     filename: 'bundle.js'
   },
  watch: true,
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test: /\.(scss|css)$/i,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=/img/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new OptimizeCssAssetsPlugin(),
    HTMLWebpackPluginConfig
  ],
  devServer: {
    host: "localhost",
    port: 3000,
    inline: true
  }
};



