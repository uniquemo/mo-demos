const path = require('path');
const koa = require('koa');
const koaStatic = require('koa-static');
const compress = require('koa-compress');
const logger = require('koa-logger');
const etag = require('koa-etag');

const app = new koa();

// 添加log信息
app.use(logger());



// 压缩gzip，配置了这个中间件，response header会多一个字段，Content-Encoding: gzip
// 问题：不知道为啥图片没有被压缩？？？
app.use(compress({
  // threshold: 2048,
  threshold: 1,
  flush: require('zlib').Z_SYNC_FLUSH
}));



// 必须手动处理返回304的逻辑
app.use(async (ctx, next) => {
  await next();
  if (ctx.fresh) {
    // 通过ctx.fresh来判断是否过期，没有则设置响应为304。
    ctx.status = 304;
  }
});
// 添加etag中间件
app.use(etag());



// 配置静态web服务的中间件
// path可以用于拼接路径url
app.use(koaStatic(path.join(__dirname, '../source'), {
  defer: false,
  /*
   * 并没有生效，不知道为啥request header有个设置：cache-control:max-age=0;
   * 原因找到了：是访问的姿势不对，如果通过在url中按enter访问，chrome默认会在request header中添加这个设置；
   * 解决：通过link超链接来访问即可。
   */
  // maxage: 30 * 1000,
}));



// 注意中间件的顺序
app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3002, () => {
  console.log('server is listening on port 3002...');
});

