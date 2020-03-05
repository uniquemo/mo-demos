const loaderUtils = require('loader-utils')

module.exports = function (source) {
  console.log('Loader a is executed!')

  const url = loaderUtils.interpolateName(this, '[name].[ext]', source)
  this.emitFile(url, source)
  return source
}
