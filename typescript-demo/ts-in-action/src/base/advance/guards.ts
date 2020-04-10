// TS类型检查机制--类型保护

enum Type { Strong, Week }

class Java {
  helloJava() {
    console.log('Hello Java')
  }
  java: any
}

class JavaScript {
  helloJavaScript() {
    console.log('Hello JavaScript')
  }
  js: any
}

// 方法四：类型保护函数
function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined
}

// 创建类型保护区块的4中方法
function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();
  
  if (isJava(lang)) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }

  // 没有类型保护，使用类型断言，很麻烦，用到的地方都要添加断言
  // if ((lang as Java).helloJava) {
  //   (lang as Java).helloJava();
  // } else {
  //   (lang as JavaScript).helloJavaScript();
  // }

  // 方法一：instanceof
  // if (lang instanceof Java) {
  //   lang.helloJava()
  //   // lang.helloJavaScript()
  // } else {
  //   lang.helloJavaScript()
  // }

  // 方法二：in，判断某个属性是否属于某个对象
  // if ('java' in lang) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // 方法三：typeof
  // if (typeof x === 'string') {
  //   console.log(x.length)
  // } else {
  //   console.log(x.toFixed(2))
  // }

  return lang;
}

getLanguage(Type.Week, 1)
