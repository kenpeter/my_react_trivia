// path
var path = require('path');

// webpack
var webpack = require('webpack');

// module exports
// export obj
module.exports = {
  // entry app.js
  entry: './js/app.js',
  // output
  output: {
    // ./build/app.bundle.js
    path: path.resolve(__dirname, 'build'),
      filename: 'app.bundle.js'
  },
  // module
  module: {
    // loaders
    loaders: [
    {
      // .js
      test: /\.js$/,
      // babel loader
      loader: 'babel-loader',
      // query
      query: {
        // preset, es2015, react
        presets: ['es2015', 'react']
      }
    }
    ]
  },
  // stat, color
  stats: {
    colors: true
  },
  // dev tool
  devtool: 'source-map'
};

