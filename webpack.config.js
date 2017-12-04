const webpack = require( 'webpack' );
const path = require( 'path' );

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve( __dirname, 'build' ),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}
