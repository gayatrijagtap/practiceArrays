const assert = require('assert');
const findIntersection = require('../arrayLibBuiltin.js').findIntersection;
assert.deepEqual(findIntersection([1,2,3,4,5],[3,4,5,6,7]),[1,2,3,4,5,6,7]);
assert.deepEqual(findIntersection([1,2,3],[4,5,6,7]),[1,2,3,4,5,6,7]);
assert.deepEqual(findIntersection([1,2,3,4,5],[3,4,5,6,7]),[1,2,3,4,5,6,7]);
assert.deepEqual(findIntersection([1,2],[1,2]),[1,2]);
assert.deepEqual(findIntersection([5,4,5,4],[4,5]),[4,5]);
