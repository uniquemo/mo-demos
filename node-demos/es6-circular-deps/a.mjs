import {bar} from './b.mjs';
console.log('a.mjs');
console.log(bar);
export let foo = 'foo';

// 执行：node --experimental-modules ./a.mjs
