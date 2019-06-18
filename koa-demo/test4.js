const pathToRegexp = require('path-to-regexp')

const cache = {};
const cacheLimit = 10000;
let cacheCount = 0;

function compilePath(path, options) {
  // const cacheKey = `${options.end}${options.strict}${options.sensitive}`;
  // const pathCache = cache[cacheKey] || (cache[cacheKey] = {});

  // if (pathCache[path]) return pathCache[path];

  console.log('options => ', options)

  const keys = [];
  const regexp = pathToRegexp(path, keys, options);
  const result = { regexp, keys };

  // if (cacheCount < cacheLimit) {
  //   pathCache[path] = result;
  //   cacheCount++;
  // }

  console.log('result 111 => ', JSON.stringify(result, null, 2))

  return result;
}

function matchPath(pathname, options = {}) {
  if (typeof options === "string") options = { path: options };

  const { path, exact = false, strict = false, sensitive = false } = options;

  const paths = [].concat(path);

  return paths.reduce((matched, path) => {
    if (!path) return null;
    if (matched) return matched;

    const { regexp, keys } = compilePath(path, {
      end: exact,
      strict,
      sensitive,
      start: false
    });
    console.log('regexp => ', regexp)
    const match = regexp.exec(pathname);

    if (!match) return null;

    const [url, ...values] = match;
    const isExact = pathname === url;

    if (exact && !isExact) return null;

    return {
      path, // the path used to match
      url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
      isExact, // whether or not we matched exactly
      params: keys.reduce((memo, key, index) => {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

// const path = /\/c\/\d+/i
const path = '/c/:id'
const result = matchPath('/a/b/c/1', { path, exact: false })
console.log('result => ', JSON.stringify(result, null, 2))

// const keys = []
// const options = {
//   end: false, // exact
//   strict: false,
//   sensitive: false,
//   start: false
// }
// const result2 = pathToRegexp('/c/:id', keys, options)
// console.log('result2 => ', JSON.stringify(result2, null, 2))
