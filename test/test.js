function Promise1(Fn) {
  let resolveCall = function() {
    console.log('我是默认的');
  }; // 定义为函数是为了防止没有then方法时报错
  this.then = (onFulfilled) => {
    resolveCall = onFulfilled;
  };

  function resolve(v) { // 将resolve的参数传给then中的回调
    resolveCall(v);
  }
  Fn(resolve);
}
new Promise1((resolve, reject) => {
  setTimeout(_ => {
    console.log('aaa');
    resolve('success');
  }, 200)
}).then(r => {
  console.log('r => ', r);
});
