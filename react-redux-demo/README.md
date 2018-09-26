### node server
```bash
npm run dev-start
```

### webpack server
```bash
npm run dev-server
```

#### babel-loader
```bash
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
```

### webpack构建好资源后，如果通过node server访问？
只需在中间件引入koa-static来管理静态资源。
进入首页就会默认访问index.html。

### react-router和react-redux如何结合使用？
直接用容器组件(Provider)包裹原来的路由根组件即可。

### babel解析解构赋值运算符时报错
解决：引入babel-preset-stage-2包。
并在babel-loader中作相应的配置。
