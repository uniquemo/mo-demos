console.log('this is module');

exports.geekbang = {
  'hello': 'haha'
}

exports.tencent = function () {
  console.log('good')
}

// module.exports = function () {
//   console.log('hello geekbang')
// }

setTimeout(() => {
  console.log('exports => ', exports)
}, 2000)
