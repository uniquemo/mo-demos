## 工程篇

### Module
使用tsc命令编译ts文件时，默认的target是es3，module是commonjs。

- 在node中，module.exports会覆盖挂载到exports上的属性。
- 当在node中调用es6模块，顶级导出需要使用`顶级导出.default`来获取。
- 尽量不要混用es6和commonjs模块系统，若混用了则需要采取兼容做法。

### 命名空间
- TS之所以保留命名空间，是为了兼容全局变量时代。
- 命名空间不应在模块中使用。
- 使用方法：首先将ts转换成js，然后在html中引用该js文件。

### 声明合并
- 编译器会把程序多个地方相同名称的声明合并成一个声明。
- 尽量少用。

### 如何编写声明文件
- 全局类库
- 模块类库
- umd类库
- 模块插件：给外部类库添加自定义方法。
- 全局插件：给全局变量添加自定义方法。

声明文件依赖方式：
- <reference types='sizzle' />
- <reference path='JQuery.d.ts' />

### 配置tsconfig文件
#### 与文件相关的配置
- files: []，指定需要编译的文件列表。
- include: []，编译器需要编译的文件/目录。
- exclude: []，编译器需要排除的文件/目录。默认排除node_modules。
