# 先跑npm run microservice
# 再跑npm run bff
# 访问demo页
1. http://localhost:3000/download/
2. http://localhost:3000/detail/?columnid=233
3. http://localhost:3000/play/
4. http://localhost:3000/list/

## 项目目录结构
- backend：模拟后端服务
- detail：detial页
- download：download页
- play：播放页
- list：列表页

## Detail页
RPC与后台服务通信，获取数据，渲染模板

## Play页
使用GraphQL API服务

请求GraphQL API的例子如下，获取所有评论列表的id和name
```bash
http://localhost:3000/play/api/?query={comment{id,name}}
```

## List页
前后端同构：同一个模板/组件，可在浏览器渲染，也可在Node.js渲染。
- 后端需要渲染列表（首屏加速、SEO）
- 前端也需要渲染列表（无刷新过滤、排序）

同构的关键：注重职责的分离
- 处理数据
- 处理环境

React做服务端渲染，主要会有性能问题。

List页目录结构：
- browser：存放浏览器端文件
- node：存放node端文件
- component：存放同构文件
