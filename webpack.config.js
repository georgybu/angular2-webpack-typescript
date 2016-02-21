var path = require('path');

module.exports = {
  context:path.join( __dirname, '/src'),
  entry: 'boot.ts',

  resolve: {
    root: [path.join(__dirname, "/src")],
    extensions: ['','.webpack.js','.ts', '.js']
  },

  module: {
    loaders: [
      { test: /\.ts$/, exclude: [/node_modules/], loader: 'ts-loader' }
    ]
  },

  devServer: {
    contentBase: "./src",
    inline: true
  }
};
