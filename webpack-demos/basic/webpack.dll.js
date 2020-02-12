const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    library: [
      'react',
      'react-dom'
    ]
  },
  output: {
    filename: '[name].dll.js',
    path: path.join(__dirname, 'build/library'),
    // 存放动态链接库的全局变量名称，例如对应 library 来说就是 library_dll
    library: '[name]_dll'   // 暴露出来的库的名字，需要与下面DllPlugin的name值保持一致
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname, // 必填，不然在web网页中找不到 '[name]_dll'，会报错
      // 动态链接库的全局变量名称，需要和 output.library 中保持一致
      // 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值
      name: '[name]_dll',
      // 描述动态链接库的 manifest.json 文件输出时的文件名称
      path: path.join(__dirname, 'build/library/[name].json')
    })
  ]
}
