const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

/*
// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
});
*/

router.get('/api/v1/test', async (ctx, next) => {
  // ctx.router available
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:4200')
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
  ctx.set('Access-Control-Allow-Headers', 'X-Requested-With, User-Agent, Referer, Content-Type, Cache-Control,accesstoken')
  ctx.set('Access-Control-Allow-Credentials', 'true')

  console.log(ctx.request)
  // ctx.body = '<div>This is server response.</div>'

  async function delay(time) {
    return new Promise(function(resolve, reject) {
      setTimeout(function(){
        resolve();
      }, time);
    });
  };
  await delay(2000);

  ctx.body = {
    text: logs,
    nextStart: Math.floor(Math.random() * 100 - 1)
  }
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3001);

var logs = `
  <div>This is response</div>
  <div><a>hhhhhhh</a></div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div>This is response</div>
  <div><a>last line</a></div>
  <div><a>last line</a></div>
`
