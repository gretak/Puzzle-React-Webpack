var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');


 var HtmlWebpackPlugin = require('html-webpack-plugin');
 var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
   template: __dirname + '/src/client/index.html',
   inject: 'body'
 });


var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var SCSS_DIR = path.resolve(__dirname, 'src/client/sass');
var IMG_DIR = path.resolve(__dirname, 'src/client/assets/img');


var config = {
   entry: [
   APP_DIR + '/index.jsx'
   ],
   output: {
     path: BUILD_DIR,
     filename: 'bundle.js'
   },
  watch: true,
  module : {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: APP_DIR
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /node_modules/,
        loader: 'stylelint',
        include: SCSS_DIR
      }
    ],
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel',
        query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
             }
      },
      {
        test: /\.(scss|css)$/i,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new OptimizeCssAssetsPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'src/client/assets/img/',
        to: 'img',
        force: true
      }
    ]),
    HTMLWebpackPluginConfig
  ],
  stylelint: {
    configFile: path.join(__dirname, './.stylelint.config.js')
  },
  devServer: {
    host: "localhost",
    port: 5005,
    inline: true
  }
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env' : {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  )

}

module.exports = config;



