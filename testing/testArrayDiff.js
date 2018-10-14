const assert = require('assert');
const genDifference = require('../arrayLibrary.js').genDifference;
assert.deepEqual(genDifference([1,2,3,4],[3,4,5,6]),[1,2]);
assert.deepEqual(genDifference([1,2],[1,2,5,6]),[]);
assert.deepEqual(genDifference([1,2,3,4],[1,2,3,4]),[]);
assert.deepEqual(genDifference([3,4,5,6],[5,6]),[3,4]);
assert.deepEqual(genDifference([4,5,6,7],[3,4,5,6]),[7]);
