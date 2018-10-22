const assert = require('assert');
const {findUnion} = require('../arrayLibBuiltin.js');
assert.deepEqual(findUnion([1,2,3,4,5],[4,5,6,7,8]),[1,2,3,6,7,8]);
assert.deepEqual(findUnion([1,2,3],[1]),[2,3]);
assert.deepEqual(findUnion([],[4,5,6,7,8]),[4,5,6,7,8]);
assert.deepEqual(findUnion([1,2,3,4,5],[1,2,3,4,5]),[]);
assert.deepEqual(findUnion([1,4,5],[4,5,6,7,8]),[1,6,7,8]);
