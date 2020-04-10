declare namespace umdLib {
  const version: string
  function doSomething(): void
}

// 转为UMD库添加的语句
export as namespace umdLib

export = umdLib
