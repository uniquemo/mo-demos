// 声明合并

// 函数合并后，会变成函数重载
interface A {
  x: number;
  // y: string;
  foo(bar: number): number; // 5
  foo(bar: 'a'): string; // 2
}
interface A {
  y: number;
  foo(bar: string): string; // 3
  foo(bar: string[]): string[]; // 4
  foo(bar: 'b'): string; // 1
}
let a: A = {
  x: 1,
  y: 2,
  foo(bar: any) {
    return bar
  }
}


// 命名空间可以和类进行合并
class C {}
namespace C {
  export let state = 1
}
console.log(C.state)


// 命名空间和函数进行合并
function Lib() {}
namespace Lib {
  export let version = '1.0'
}
console.log(Lib.version)


// 命名空间和枚举进行合并
enum Color {
  Red,
  Yellow,
  Blue
}
namespace Color {
  export function mix() {}
}
console.log(Color)
