const assert = require('assert');
let evenSeries = require('./selectingEvenNumbers.js').evenSeries;

let numbers = [1,2,3,4,5];
console.log(assert.deepEqual(evenSeries(numbers),[2,4]));
console.log(assert.deepEqual(evenSeries([3,2]),[2]));
console.log(assert.deepEqual(evenSeries([6,4,2]),[6,4,2]));
console.log(assert.deepEqual(evenSeries([0,1,2,3,4]),[0,2,4]));
