const assert = require('assert');
const findDifference = require('../arrayLibBuiltin.js').findDifference;
assert.deepEqual(findDifference([1,2,3,4],[3,4,5,6]),[1,2]);
assert.deepEqual(findDifference([1,2],[1,2,5,6]),[]);
assert.deepEqual(findDifference([1,2,3,4],[1,2,3,4]),[]);
assert.deepEqual(findDifference([3,4,5,6],[5,6]),[3,4]);
assert.deepEqual(findDifference([4,5,6,7],[3,4,5,6]),[7]);
