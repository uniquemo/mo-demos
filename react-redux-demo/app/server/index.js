const koa = require('koa');
const koaStatic = require('koa-static');
const path = require('path');

const app = new koa();

// 配置静态web服务的中间件
// path可以用于拼接路径url
app.use(koaStatic(path.join(__dirname, '../build'), {
  defer: false,
}));

app.listen(3003, () => {
  console.log('server is listening on port 3003...');
});

app.on('error', (err, ctx) => {
  log.error('server error', err, ctx)
});
