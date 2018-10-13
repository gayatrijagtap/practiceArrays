const assert = require('assert');
const numbersBelowThreshold=require('./NumbersBeloweThreshold.js').numbersBelowThreshold;
assert.equal(numbersBelowThreshold([1,2,3,4],2),1);
assert.equal(numbersBelowThreshold([1,2,3,4],3),2);
assert.equal(numbersBelowThreshold([-1,-2,-3,-4],-4),0);
assert.equal(numbersBelowThreshold([1],1),0);
assert.equal(numbersBelowThreshold([1,2,3,5,6,7,8,9,4],5),4);
