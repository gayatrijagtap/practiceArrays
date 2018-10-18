const assert = require('assert');
const generateDifference = require('../arrayLibrary.js').generateDifference;
assert.deepEqual(generateDifference([1,2,3,4],[3,4,5,6]),[1,2]);
assert.deepEqual(generateDifference([1,2],[1,2,5,6]),[]);
assert.deepEqual(generateDifference([1,2,3,4],[1,2,3,4]),[]);
assert.deepEqual(generateDifference([3,4,5,6],[5,6]),[3,4]);
assert.deepEqual(generateDifference([4,5,6,7],[3,4,5,6]),[7]);
