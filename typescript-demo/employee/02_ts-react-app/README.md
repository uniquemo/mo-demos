## 使用方式
### 启动mock server
```bash
yarn server
```

- mock server是将本地mock文件夹作为服务：`cd mock && hs -p 4000 -a localhost`。
- 然后，在启动app时，create-react-app会自动执行本地的代理服务器：src/setupProxy.js，将http的请求都代理到本地的服务👆。

### 启动app
```bash
yarn start
```
