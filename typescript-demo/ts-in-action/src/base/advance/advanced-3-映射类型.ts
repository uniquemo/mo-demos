// TS高级类型：映射类型，从一个类型生成新的类型

interface Obj1 {
  a: string;
  b: number;
  c: boolean;
}
type ReadonlyObj = Readonly<Obj1>

type PartialObj = Partial<Obj1>

type PickObj = Pick<Obj1, 'a' | 'b'>

type RecordObj = Record<'x' | 'y', Obj1>
