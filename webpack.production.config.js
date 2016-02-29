var path = require('path'),
    viewsPath = './src/app/views/',
    vendorPath = './src/app/vendor/',
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'eval',	
  entry:  {
  	'home.html': [ 
        vendorPath += 'jquery-1.12.0.min.js',
        viewsPath += 'home/*.js'
    ],
  	'pizza.html':  [
        viewsPath += 'pizza/*.js'
        ]
  },
  output: {
    path: './',
    filename: '[name].bundle.js',
    chunkFilename: '[id].js'
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        loader:'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
 ]
}