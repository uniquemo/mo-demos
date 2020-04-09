// TS高级类型：索引类型

let tmpObj = {
  a: 1,
  b: 2,
  c: 3
}

// function getValues(obj: any, keys: string[]) {
//   return keys.map(key => obj[key])
// }
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key])
}
console.log(getValues(tmpObj, ['a', 'b']))
// console.log(getValues(obj, ['d', 'e']))


// keyof T：返回的是T所有属性的联合类型
interface Obj {
  a: number;
  b: string;
}
let key: keyof Obj


// T[K]：返回T中属性为K的数据的类型
let value: Obj['a']


// T extends U
