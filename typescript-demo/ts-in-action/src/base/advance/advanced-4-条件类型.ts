// TS高级类型：条件类型

// T extends U ? X : Y ===> T是否可以赋值给U
type TypeName<T> =
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  T extends undefined ? "undefined" :
  T extends Function ? "function" :
  "object";
type T1 = TypeName<string>
type T2 = TypeName<string[]>


// (A | B) extends U ? X : Y ===> (A extends U ? X : Y) | (B extends U ? X : Y)
type T3 = TypeName<string | string[]>


type Diff<T, U> = T extends U ? never : T
type T4 = Diff<"a" | "b" | "c", "a" | "e">
// 过程如下：
// Diff<"a", "a" | "e"> | Diff<"b", "a" | "e"> | Diff<"c", "a" | "e">
// ===> a可以赋值给a|e，所以结果为never；b不可以赋值给a|e，所以结果为b；c不可以赋值给a|e，所以结果为c
// ===> never | "b" | "c"
// ===> "b" | "c"


type NotNull<T> = Diff<T, null | undefined>
type T5 = NotNull<string | number | undefined | null>


// Exclude<T, U>    // 官方内置
// NonNullable<T>   // 官方内置


// Extract<T, U>    // 从类型T中抽取出可以赋值给U的类型
type T6 = Extract<"a" | "b" | "c", "a" | "e">


// ReturnType<T>：获取函数返回值的类型
type T8 = ReturnType<() => string>
