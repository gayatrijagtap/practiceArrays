const assert = require('assert');
const selectElements = require('../arrayLibrary.js').selectElements;
assert.deepEqual(selectElements([2,3,4]),[2,4]);
assert.deepEqual(selectElements([0,2,4,6]),[0,4]);
assert.deepEqual(selectElements([1,2,3,4,5,6]),[1,3,5]);
assert.deepEqual(selectElements([9,8,7,6,5,4]),[9,7,5]);
assert.deepEqual(selectElements([5,3,8]),[5,8]);
