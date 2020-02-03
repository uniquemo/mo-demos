const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const devConfig = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin() // 热更新
  ],
  devServer: { // 热更新
    contentBase: './dist/',
    hot: true,
    stats: 'errors-only' // 命令行显示优化
  },
  devtool: 'cheap-source-map' // source map
}

module.exports = merge(baseConfig, devConfig)
