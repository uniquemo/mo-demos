const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    // 使用npm script`npm run server`启动mock服务
    // app.use(proxy('/api', {
    //   target: 'http://localhost:4000',
    //   pathRewrite(path) {
    //     return path.replace(/^\/api([^?]+)/, '$1.json');
    //   }
    // }));


    // 使用04_ts-express启动的服务
    app.use(proxy('/api', {
      target: 'http://localhost:4001'
    }))
};
