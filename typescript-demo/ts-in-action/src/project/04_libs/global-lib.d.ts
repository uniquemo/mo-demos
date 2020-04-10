// 这里使用到了函数和命名空间的声明合并，为函数添加了属性version和doSomething。

declare function globalLib(options: globalLib.Options): void;

declare namespace globalLib {
  const version: string;
  function doSomething(): void;
  interface Options {
    [key: string]: any
  }
}
