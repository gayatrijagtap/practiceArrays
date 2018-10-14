const assert = require('assert');
const arrayIntersection = require('../arrayLibrary.js').createIntersection;
assert.deepEqual(arrayIntersection([1,2,3,4,5],[3,4,5,6,7]),[3,4,5]);
assert.deepEqual(arrayIntersection([1,2,3],[4,5,6,7]),[]);
assert.deepEqual(arrayIntersection([1,2,3,4,5],[3,4,5,6,7]),[3,4,5]);
assert.deepEqual(arrayIntersection([1,2],[1,2]),[1,2]);
assert.deepEqual(arrayIntersection([5,4,5,4],[4,5]),[5,4]);
