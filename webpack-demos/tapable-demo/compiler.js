const { SyncHook, AsyncSeriesHook } = require('tapable')

module.exports = class Car {
  constructor () {
    // 新建钩子
    this.hooks = {
      accelerate: new SyncHook(['newspeed']),
      brake: new SyncHook(),
      calculateRoutes: new AsyncSeriesHook(['source', 'target', 'routesList'])
    }
  }
  run () {
    this.accelerate(10)
    this.break()
    this.calculateRoutes('Async', 'hook', 'demo')
  }
  break () {
    this.hooks.brake.call()
  }
  accelerate (speed) {
    this.hooks.accelerate.call(10)
  }
  calculateRoutes (...args) {
    this.hooks.calculateRoutes.promise(...args)
      .then(() => {
        console.log(...args)
      }, err => {
        console.error(err)
      })
  }
}
