## 工程篇

### Module
使用tsc命令编译ts文件时，默认的target是es3，module是commonjs。

- 在node中，module.exports会覆盖挂载到exports上的属性。
- 当在node中调用es6模块，顶级导出需要使用`顶级导出.default`来获取。
- 尽量不要混用es6和commonjs模块系统，若混用了则需要采取兼容做法。
