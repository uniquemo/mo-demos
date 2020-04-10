//  用接口定义对象

interface List {
  readonly id: number;
  name: string;
  // [x: string]: any;
  age?: number;
}
interface Result {
  data: List[]
}
function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name)
    if (value.age) {
      console.log(value.age)
    }
    // value.id++
  })
}
let result = {
  data: [
    {id: 1, name: 'A', sex: 'male'},
    {id: 2, name: 'B', age: 10}
  ]
}
render(result)

interface StringArray {
  [index: number]: string
}
let chars: StringArray = ['a', 'b']

interface Names {
  [x: string]: any;
  // y: number;
  [z: number]: number;
}



// 用接口定义函数

// let add: (x: number, y: number) => number
// interface Add {
//     (x: number, y: number): number
// }
type Add = (x: number, y: number) => number
let addd: Add = (a, b) => a + b

// 混合类型的接口：既可以定义一个函数，同时该函数又可以像对象那样拥有属性和方法。
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

function getLib() {
  let lib = (() => {}) as Lib
  lib.version = '1.0.0'
  lib.doSomething = () => {}
  return lib;
}
let lib1 = getLib()
lib1()
let lib2 = getLib()
lib2.doSomething()
