const assert = require('assert');
const findUniques = require('../arrayLibBuiltin.js').findUniques;
assert.deepEqual(findUniques([12,3,43,5,3,7,12,5,9]),[12,3,43,5,7,9]);
assert.deepEqual(findUniques([1,1,2,2,5,5,2,34,64,5,1]),[1,2,5,34,64,]);
assert.deepEqual(findUniques([54,56,2,34,34,56]),[54,56,2,34]);
assert.deepEqual(findUniques([3,3,3,3,3,3,3,3,3]),[3]);
assert.deepEqual(findUniques([1,2,3,4,5]),[1,2,3,4,5]);
