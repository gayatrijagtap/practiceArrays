const assert = require('assert');
const extractDigits = require('../arrayLibrary.js').extractDigits;
assert.deepEqual(extractDigits(12345),[1,2,3,4,5]);
assert.deepEqual(extractDigits(54321),[5,4,3,2,1]);
assert.deepEqual(extractDigits(53127),[5,3,1,2,7]);
assert.deepEqual(extractDigits(43432),[4,3,4,3,2]);
assert.deepEqual(extractDigits(43872),[4,3,8,7,2]);
