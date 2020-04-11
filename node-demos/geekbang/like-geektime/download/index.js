const koa = require('koa')
const fs = require('fs')
const mount = require('koa-mount')
const static = require('koa-static')

const app = new koa()

app.use(
  static(__dirname + '/source/')
)

const buffer = fs.readFileSync(__dirname + '/source/index.html')

// const leak = []

app.use(
  mount('/', async (ctx) => {
    // leak.push(str)
    // const str = fs.readFileSync(__dirname + '/source/index.html', 'utf-8')
    // ctx.body = str

    ctx.status = 200
    ctx.type = 'html'
    ctx.body = buffer

    // ctx.body = fs.readFileSync(__dirname + '/source/index.html', 'utf-8')
  })
)

// app.listen(3000)
module.exports = app
