const assert = require('assert');
const indexOfNumber = require('./indexOfANumber.js').indexOfNumber;
assert.equal(indexOfNumber([1,2,3,4],3),2);
assert.equal(indexOfNumber([1,2,3,4],4),3);
assert.equal(indexOfNumber([1,2,3,4],1),0);
assert.equal(indexOfNumber([1,2,3,4],2),1);
assert.equal(indexOfNumber([1,2,3,4],5),"unmatched");
