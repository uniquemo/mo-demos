const max = Number.MAX_SAFE_INTEGER
console.log(max)                // 9007199254740991
console.log(max + 1)            // 9007199254740992
console.log(max + 2)            // 9007199254740992，wrong answer!
console.log(BigInt(max) + 2n)   // 9007199254740993n，correct!

1234567890123456789 * 123       // 151851850485185200000，wrong answer!
1234567890123456789n * 123n     // 151851850485185185047n，correct!

typeof 123    // 'number'
typeof 123n   // 'bigint'

42n === BigInt(42)  // true
42n == 42           // true
42n === 42          // false

(7 + 6 - 5) * 4 ** 3 / 2 % 3          // 1
(7n + 6n - 5n) * 4n ** 3n / 2n % 3n   // 1n
