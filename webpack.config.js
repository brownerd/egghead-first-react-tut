var path = require('path');
var webpack = require('webpack');

module.exports = {


  entry: [
    // Set up an ES6-ish environment
    'babel-polyfill',

    // Add your application's scripts below
    //"./app/components/Main"
    "./app/App"
  ],
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",

        // Skip any files outside of your project's `src` directory
        // include: [
        //   path.resolve(__dirname, "app"),
        // ],

        exclude: [
          path.resolve(__dirname, "node_modules"),
        ],

        //exclude: /(node_modules)/,

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        }
      },
    ]
  }
}
