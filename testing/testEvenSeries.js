const assert = require('assert');
let evenSeries = require('../arrayLibrary.js').evenSeries;

let numbers = [1,2,3,4,5];
assert.deepEqual(evenSeries(numbers),[2,4]);
assert.deepEqual(evenSeries([3,2]),[2]);
assert.deepEqual(evenSeries([6,4,2]),[6,4,2]);
assert.deepEqual(evenSeries([0,1,2,3,4]),[0,2,4]);
