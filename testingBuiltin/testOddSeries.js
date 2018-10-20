const assert = require('assert');
let oddSeries = require('../arrayLibrary.js').oddSeries;

let numbers = [1,2,3,4,5];
assert.deepEqual(oddSeries(numbers),[1,3,5]);
assert.deepEqual(oddSeries([3,2]),[3]);
assert.deepEqual(oddSeries([6,4,2]),[]);
assert.deepEqual(oddSeries([0,1,2,3,4]),[1,3]);
