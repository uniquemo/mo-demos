interface Human {
  name: string;
  eat(): void;
}

// 类实现接口，接口只能约束类的公有成员(public)
class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string
  eat() {}
  age: number = 0
  sleep() {}
}

interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {}
}


class Auto {
  state = 1
  // private state2 = 1
}
// 接口继承类，接口可以抽离类的成员，包括public，private，protected成员
interface AutoInterface extends Auto {

}
// 类实现接口
class C implements AutoInterface {
  state = 1
}
class Bus extends Auto implements AutoInterface {

}
