const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  /**
   * We basically put the whole big.file content in memory before we wrote it out to the response object. This is very inefficient.
   * 下面👇的代码将整个big.file的内容放到内存，然后将它写到response对象中，这样其实很低效。
   * 
   * fs.readFile('./big.file', (err, data) => {
   *  if (err) throw err;
   *
   *  res.end(data);
   * });
   */

  const src = fs.createReadStream('./big.file');
  src.pipe(res);
});

server.listen(8001);
