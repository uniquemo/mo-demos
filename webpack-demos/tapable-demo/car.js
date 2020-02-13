const { SyncHook, AsyncSeriesHook } = require('tapable')

class Car {
  constructor () {
    // 新建钩子
    this.hooks = {
      accelerate: new SyncHook(['newspeed']),
      brake: new SyncHook(),
      calculateRoutes: new AsyncSeriesHook(['source', 'target', 'routesList'])
    }
  }
}
const myCar = new Car()

// 绑定钩子
myCar.hooks.brake.tap('WarningLampPlugin', () => {
  console.log('WarningLampPlugin')
})
myCar.hooks.accelerate.tap('LoggerPlugin', (newSpeed) => {
  console.log(`Accelerate to ${newSpeed}`)
})
myCar.hooks.calculateRoutes.tapPromise('calculateRoutes tapPromise', (source, target, routesList) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`tapPromise to ${source} ${target} ${routesList}`)
      resolve()
    }, 1000)
  })
})

// 执行钩子
myCar.hooks.brake.call()
myCar.hooks.accelerate.call(10)
console.time('cost')
myCar.hooks.calculateRoutes.promise('Async', 'hook', 'demo')
  .then(() => {
    console.timeEnd('cost')
  }, err => {
    console.error(err)
    console.timeEnd('cost')
  })
