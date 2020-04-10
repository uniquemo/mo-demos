// 泛型：不预先确定的数据类型，具体的类型在使用的时候才能确定。
/*
  泛型的好处：
  1.函数和类可以轻松地支持多种类型，增强程序的扩展性。
  2.不必写多条函数重载，冗长的联合类型声明，增强代码可读性。
  3.灵活控制类型之间的约束。
*/

// 泛型函数
function log<T>(value: T): T {
  console.log(value);
  return value;
}
log<string[]>(['a', ',b', 'c'])
log(['a', ',b', 'c']) // TS类型推断

// type Log = <T>(value: T) => T  // 定义一个泛型函数类型
// let myLog: Log = log

// 泛型接口
// interface Log<T> {   // 这里与上面的泛型函数类型是等价的
//   (value: T): T
// }
// let myLog: Log<number> = log   // 泛型接口在使用时，必须要指定具体的类型
// myLog(1)


// 泛型约束类的成员，泛型不可以约束静态成员
class Log<T> {
  run(value: T) {
    console.log(value)
    return value
  }
}
let log11 = new Log<number>()
log11.run(1)
let log22 = new Log()
log22.run({ a: 1 })


interface Length {
  length: number
}
// 类型约束，T必须包含length属性
function logAdvance<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value;
}
logAdvance([1])
logAdvance('123')
logAdvance({ length: 3 })
