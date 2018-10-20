const assert = require('assert');
const rotateArray = require('../arrayLibrary.js').rotateArray;
assert.deepEqual(rotateArray([1,2,3,4,5],3),[3,4,5,1,2]);
assert.deepEqual(rotateArray([1,2,3,4,5],2),[2,3,4,5,1]);
assert.deepEqual(rotateArray([1,2,3,4,5],4),[4,5,1,2,3]);
assert.deepEqual(rotateArray([1,2,3,4,5],5),[5,1,2,3,4]);
assert.deepEqual(rotateArray([1,2,3,4,5],1),[1,2,3,4,5]);
