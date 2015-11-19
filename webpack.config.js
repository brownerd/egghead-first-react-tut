var path = require('path');
var webpack = require('webpack');

module.exports = {


  entry: [
    // Set up an ES6-ish environment
    'babel-polyfill',

    // Add your application's scripts below
    //'./app/components/Main'
    './app/App',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    //filename: 'public/bundle.js'

    //https://webpack.github.io/docs/webpack-dev-server.html
    path: path.resolve(__dirname, "public"), //Path to build, public or dist
    publicPath: "/", // Indicate path that contains build, public, dist folder
    filename: "bundle.js" // Name of file to bundle

    // Bundle will be available at localhost:8080/bundle.js
  },
  devServer: {
    contentBase: "./public/"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',

        //Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, 'app')
        ],

        // exclude: [
        //   path.resolve(__dirname, 'node_modules'),
        // ],

        //exclude: /(node_modules)/,

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  debug: true
}
