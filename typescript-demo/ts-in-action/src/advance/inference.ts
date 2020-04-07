// TS类型检查机制--类型推断

// 从右到左类型推断
let a = 1;
let b = [1, null, 'a']
let c = {x: 1, y: 'a'}
let d = (x = 1) => x + 1

// 从左到右类型推断：上下文类型推断
window.onkeydown = (event) => {
  console.log(event)
}

interface Foo {
  bar: number
}
// 类型断言：覆盖TS的类型推断
// let foo = {} as Foo
// let foo = <Foo>{}
let foo: Foo = {
  bar: 1
}
// foo.bar = 1
