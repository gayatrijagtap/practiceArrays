const assert = require('assert');
const checkAscending=require('../arrayLibBuiltin.js').checkAscending;
assert.equal(checkAscending([1,2,3,4,5]),true);
assert.equal(checkAscending([1,2,4,3,8]),false);
assert.equal(checkAscending([0,3,6,8,9]),true);
assert.equal(checkAscending([-1,2,4,-2,9]),false);
assert.equal(checkAscending([12,23,34,45,56]),true);
