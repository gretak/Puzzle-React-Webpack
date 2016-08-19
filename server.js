require('./server.babel');
var path = require('path');
var fs = require('fs');
var express = require('express');
var webpack = require('webpack');

global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

if (__DEVELOPMENT__) {
  var config = require('./webpack.config');
} else{
  var config = require('./webpack.prod.config');
}


var app = express();
var compiler = webpack(config);


if (__DEVELOPMENT__) {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}


if (__DEVELOPMENT__) {
  var config = require('./webpack.config');
  var compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
} else{
  var config = require('./webpack.prod.config');
  var compiler = webpack(config);
}


