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

具体看`src/project/05_tsconfig`。


### 编译工具：从ts-loader到babel
#### ts-loader
- ts-loader默认会既做编译，又做类型检查，可以给ts-loader的options，添加`transpileOnly: true`属性，关闭检查。
- 但是这样编译时不会检查类型错误了，此时，可以使用`fork-ts-checker-webpack-plugin`来进行类型检查，它会单独起一个进程处理。

#### awesome-typescript-loader
与ts-loader的主要区别：
- 更适合于Babel集成，使用Babel的转义和缓存；
- 不需要安装额外的插件，就可以把类型检查放在独立进程中进行。（自带检查插件CheckerPlugin）

#### 使用了TypeScript，为什么还需要Babel？
- Babel7之前，不支持TS，若要使用TS：TS => tsc(ts-loader/awesome-typescript-loader) => JS => Babel => JS
- Babel7之后：TS => Babel => JS（其中TS转换为JS过程中，tsc(type checking)）
- Babel是不能进行类型检查的。

解决方式：
- Babel用于将TS转换为JS。
- tsc用于做类型检查。需要在tsconfig.json配置文件中将属性`noEmit: true`开启，表示TS只做类型检查。

在Babel中使用TS需要注意的事项：有四种语法在Babel中是无法编译的。
- Babel不支持namespace
- 类型断言的写法，使用as，不要使用尖括号
- 常量枚举Babel不支持
- 默认导出：export = a，这种语法Babel不支持


### 代码检查工具：从TSLint到ESLint
#### 使用了TypeScript，为什么还需要ESLint？
- TypeScript：类型检查、语言转换、语法错误。
- ESLint：代码风格、语法错误。

代码检查过程：
- TS：Code => TS => AST => TSLint语法风格检查；TS类型检查语言转换为JS。
- ESLint：Code => ESLint => AST => 语法风格检查；社区围绕ESLint的其他工作。

**虽然TS和ESLint在工作之前都会将代码转换为AST，但是这两个AST是不兼容的。**

解决方式：`typescript-eslint`。它会将TS的语法树转换为ESLint所期望的语法树。
- 安装eslint、@typescript-eslint/eslint-plugin、@typescript-eslint/parser，并配置.eslintrc.json文件。
- 添加npm script脚本`eslint src --ext .js,.ts`。
- 除了使用npm script脚本做代码检查外，还可以安装eslint的插件(VSCode插件)来辅助我们的开发。

#### babel-eslint与typescript-eslint
- babel-eslint：支持TypeScript没有的额外的语法检查，抛弃TypeScript，不支持类型检查。
- typescript-eslint：基于TypeScript的AST，支持创建基于类型信息的规则（tsconfig.json）。

建议：
- 两者底层机制不一样，不要一起使用。
- Babel体系建议使用babel-eslint，否则可以使用typescript-eslint。


### 使用Jest进行单元测试
1. 编译工具
  - ts-loader
  - @babel/preset-typescript
2. 代码检查工具
  - eslint + typescript-eslint
  - babel-eslint
3. 单元测试工具
  - ts-jest
  - babel-jest

**ts-jest使用：**
- 安装jest、ts-jest。
- 配置jest.config.js文件。
- 添加npm script脚本`"test": "jest"`。

**babel-jest使用：**
- 安装jest、babel-jest。
- 添加npm script脚本`"test": "jest"`。
