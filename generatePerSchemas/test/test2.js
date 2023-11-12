import {func1} from '../dist/esm/index.js';

console.log(func1);

const a = func1(1,2);
console.log(a);

/////////////////// if type is commomjs
// const {func3} = require('./mockUtil.js');
// console.log(func3(1, 2));