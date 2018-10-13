const assert = require('assert');
const checkDescendingOrder=require('./descendingOrder.js').checkDescendingOrder;
assert.equal(checkDescendingOrder([5,4,3,2,1]),true);
assert.equal(checkDescendingOrder([1,2,4,3,8]),false);
assert.equal(checkDescendingOrder([9,6,4,3,1]),true);
assert.equal(checkDescendingOrder([-1,2,4,-2,9]),false);
assert.equal(checkDescendingOrder([98,87,76,65,54]),true);
