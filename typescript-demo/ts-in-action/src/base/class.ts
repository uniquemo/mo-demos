// 抽象类：只能被继承，不能被实例化的类
abstract class Animal {
  eat() {
    console.log('eat')
  }
  abstract sleep(): void  // 抽象方法，父类中无具体实现
}
// let animal = new Animal()

class Dog extends Animal {
  constructor(name: string) {
    super()
    this.name = name
    this.pri()
  }
  public name: string = 'dog'
  run() {}
  private pri() {}    // 只能在类中访问
  protected pro() {}  // 受保护成员只能在类和子类中访问，不能在对象中访问
  readonly legs: number = 4
  static food: string = 'bones'
  sleep() {
    console.log('Dog sleep')
  }
}
// console.log(Dog.prototype)
let dog = new Dog('wangwang')
// console.log(dog)
// dog.pri()
// dog.pro()
console.log(Dog.food)
dog.eat()

class Husky extends Dog {
  constructor(name: string, public color: string) {
    super(name)
    this.color = color
    // this.pri()
    this.pro()
  }
  // color: string
}
console.log(Husky.food)


class Cat extends Animal {
  sleep() { // 多态，不同的对象调用不同的sleep方法
    console.log('Cat sleep')
  }
}
let cat = new Cat()

let animals: Animal[] = [dog, cat]
animals.forEach(i => {
  i.sleep()
})

// class this，实现链式调用
class Workflow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}
new Workflow().step1().step2()

class MyFlow extends Workflow {
  next() {
    return this
  }
}
new MyFlow().next().step1().next().step2()