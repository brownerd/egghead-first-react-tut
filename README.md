# Egghead React App Tut


## Notes

These are notes as to how to make this work with the latest version of Babel and all other modules.

### Video 1

1. I followed this tut to figure out how to get the latest version of Babel to run. [Using ES6 and ES7 in the Browser, with Babel 6 and Webpack](http://jamesknelson.com/using-es6-in-the-browser-with-babel-6-and-webpack/)

1. I followed [REACT FOR BEGINNERS](https://reactforbeginners.com/) To figure out how to use the latest version of React to get this Tut running.

```js
// latest dependencies in 
// package.json

  "dependencies": {
    "babel-polyfill": "6.1.19",
    "babel-runtime": "6.1.18",
    "path": "0.12.7",
    "react": "0.14.2",
    "react-dom": "0.14.2",
    "react-router": "1.0.0"
  },
  "devDependencies": {
    "babel-core": "6.1.21",
    "babel-loader": "6.2.0",
    "babel-plugin-transform-runtime": "6.1.18",
    "babel-preset-es2015": "6.1.18",
    "babel-preset-react": "6.1.18",
    "babel-preset-stage-0": "6.1.18"
  }
```



```js
// webpack.config.js

var path = require('path')

module.exports = {


  entry: [
    // Set up an ES6-ish environment
    'babel-polyfill',

    // Add your application's scripts below
    "./app/components/Main.js"
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
```
