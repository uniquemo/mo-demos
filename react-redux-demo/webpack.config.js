const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const SOURCE_PATH = path.join(__dirname, 'app/src');

module.exports = {
  mode: 'development',
  entry: './app/src/index.js',
  output: {
    path: path.resolve(__dirname, 'app/build'),
    filename: 'bundle.js',
    // publicPath: '/assets/'   // path 和 publicPath 的区别？？
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, 'app/src')
      ],
      exclude: [
        path.resolve(__dirname, 'app/build')
      ],
      loader: 'babel-loader',
      options: {
        presets: ['es2015', 'react', 'stage-2']
      },
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SOURCE_PATH, 'index.tmpl.html'),
      inject: 'body'
    })
  ]
};
