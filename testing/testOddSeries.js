const assert = require('assert');
let oddSeries = require('./selectingOddNumbers.js').oddSeries;

let numbers = [1,2,3,4,5];
console.log(assert.deepEqual(oddSeries(numbers),[1,3,5]));
console.log(assert.deepEqual(oddSeries([3,2]),[3]));
console.log(assert.deepEqual(oddSeries([6,4,2]),[]));
console.log(assert.deepEqual(oddSeries([0,1,2,3,4]),[1,3]));
