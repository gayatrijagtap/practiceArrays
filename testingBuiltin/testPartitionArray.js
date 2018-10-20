const assert = require('assert');
const partitionArray = require('../arrayLibrary.js').partitionArray;
assert.deepEqual(partitionArray([1,2,3,4,5],3),[ [ 1, 2 ], [ 3, 4, 5 ] ]);
assert.deepEqual(partitionArray([2,4,43,5,6,3,5,64,75],3),[ [ 2,4,43,5,6 ], [ 3,5,64,75 ] ]);
assert.deepEqual(partitionArray([2,32,5,6,7,5,6,75,43],7),[ [ 2,32,5,6 ], [ 7,5,6,75,43 ] ]);
assert.deepEqual(partitionArray([1,2,3,4,5],3),[ [ 1, 2 ], [ 3, 4, 5 ] ]);
assert.deepEqual(partitionArray([1,2,3,4,5],3),[ [ 1, 2 ], [ 3, 4, 5 ] ]);
