const fs = require('fs')
const path = require('path')
const { runLoaders } = require('loader-runner')

runLoaders({
  resource: path.join(__dirname, './demo.txt'),
  loaders: [
    path.join(__dirname, './raw-loader.js')
  ],
  context: {
    minimize: true
  },
  readResource: fs.readFile.bind(fs)
}, (err, result) => {
  console.log(err || result)
})
