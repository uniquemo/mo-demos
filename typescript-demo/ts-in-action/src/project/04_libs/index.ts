import $ from 'jquery'
$('.app').css('color', 'red')


// 全局类库
globalLib({x: 1})
globalLib.doSomething()


// 模块类库
import moduleLib from './module-lib'
moduleLib({y: 2})
moduleLib.doSomething()


// umd库，umd库也可以通过全局方式引用，需要在html文件中通过script引入
import umdLib from './umd-lib'
umdLib.doSomething()


// 模块插件，如果想要给外部类库添加自定义方法：
import m from 'moment';
declare module 'moment' {
  export function myFunction(): void;
}
m.myFunction = () => {}


// 全局插件，给全局变量添加自定义方法：
declare global {
  namespace globalLib {
    function doAnyting(): void
  }
}
globalLib.doAnyting = () => {}
