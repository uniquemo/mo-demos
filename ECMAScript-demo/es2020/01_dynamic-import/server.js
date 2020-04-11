const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url)

  if (parsedUrl.pathname === '/') {
    res.writeHead(200)
    fs.createReadStream(__dirname + '/index.html').pipe(res)
  } else if (parsedUrl.pathname === '/utils.mjs') {
    res.setHeader('content-type', 'text/javascript')
    fs.createReadStream(__dirname + '/utils.mjs').pipe(res)
  }
})

server.listen(3000)
