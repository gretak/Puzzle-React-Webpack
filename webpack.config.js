var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var webpackDevServer = require("webpack-dev-server");


var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
   entry: [
   APP_DIR + '/index.jsx'
   ],
   output: {
     path: BUILD_DIR,
     filename: 'bundle.js'
   },
   module: {
     loader: [{
       test: /\.jsx?$/,
       loader: 'babel'
     }]
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
    new webpack.HotModuleReplacementPlugin()
  ]
};

// var server = new webpackDevServer(compiler, {
//   quiet: false,
//   stats: { colors: true },
//   proxy: {
//     "/api": {
//       "target": {
//         "host": "action-js.dev",
//         "protocol": 'http:',
//         "port": 80
//       },
//       ignorePath: true,
//       changeOrigin: true,
//       secure: false
//     }
//   }
// });
// server.listen(8080);

module.exports = 
  config;
  
  //devServer: {
   // hot: true
  //}
//};



