const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    'large-number': './src/index.js',
    'large-number.min': './src/index.js'
  },
  output: {
    filename: '[name].js',
    library: 'largeNumber',   // 指定库的全局变量
    libraryTarget: 'umd',     // 支持库引入的方式
    libraryExport: 'default'  // 若不设置，引用库：largeNumber.default
  },
  mode: 'none',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/ // 仅对min版本进行压缩
      })
    ]
  }
}
