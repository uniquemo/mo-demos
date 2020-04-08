// TS高级类型：交叉类型与联合类型

interface DogInterface {
  run(): void
}
interface CatInterface {
  jump(): void
}
// 交叉类型，取并集
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {}
}


// 联合类型，取交集
let a1: number | string = 1
let b1: 'a' | 'b' | 'c'
let c1: 1 | 2 | 3


class Dog1 implements DogInterface {
  run() {}
  eat() {}
}
class Cat1 implements CatInterface {
  jump() {}
  eat() {}
}
enum Master { Boy, Girl }
function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dog1() : new Cat1();
  // pet.run()
  // pet.jump()
  pet.eat()
  return pet
}


interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}
type Shape = Square | Rectangle | Circle
function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.width;
    case 'circle':
      return Math.PI * s.radius ** 2
    default:
      // 检查s是否是never类型，若是，则前面所以分支都被覆盖了；否则，前面分支遗漏。
      return ((e: never) => {throw new Error(e)})(s)
  }
}
console.log(area({kind: 'circle', radius: 1}))
