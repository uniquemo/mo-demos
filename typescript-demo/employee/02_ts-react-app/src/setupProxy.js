// create-react-app在启动时会自动调用这个文件

// const proxy = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(proxy('/api/**/*.action', {
//     target: 'http://localhost:4000',
//     pathRewrite(path) {
//       return path.replace('/api', '/').replace('.action', '.json');
//     }
//   }));
// };

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({
    target: 'http://localhost:4000',
    pathRewrite(path) {
      return path.replace('/api', '/').replace('.action', '.json');
    }
  }));
};
