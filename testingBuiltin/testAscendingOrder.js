const assert = require('assert');
const checkAscendingOrder=require('../arrayLibrary.js').checkAscendingOrder;
assert.equal(checkAscendingOrder([1,2,3,4,5]),true);
assert.equal(checkAscendingOrder([1,2,4,3,8]),false);
assert.equal(checkAscendingOrder([0,3,6,8,9]),true);
assert.equal(checkAscendingOrder([-1,2,4,-2,9]),false);
assert.equal(checkAscendingOrder([12,23,34,45,56]),true);
