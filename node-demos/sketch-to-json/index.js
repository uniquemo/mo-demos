const fs = require('fs')
const sketch2json = require('sketch2json')

fs.readFile(__dirname + '/test1-copy.sketch', (error, data) => {
  sketch2json(data).then(result => {
    const fileJson = JSON.stringify(result, null, 2)
    fs.writeFile(__dirname + '/test1-copy.json', fileJson, {}, (error, data) => {
      console.log(data)
    })
  })
})
