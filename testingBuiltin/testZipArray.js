const assert = require('assert');
const zipArray = require('../arrayLibrary.js').zipArray;
assert.deepEqual(zipArray([1,2,3,4],[5,6,7,8]),[ [ 1, 5 ], [ 2, 6 ], [ 3, 7 ], [ 4, 8 ] ]);
assert.deepEqual(zipArray([1,2,3,4,43,6],[1,2,3,4]),[ [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ] ]);
assert.deepEqual(zipArray([1,1,1,1],[2,2,2,2,32,43]),[ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]);
assert.deepEqual(zipArray([1,3,4,877,21,23,345,4],[5,6,7,867]),[ [ 1, 5 ], [ 3, 6 ], [ 4, 7 ], [ 877, 867 ] ]);
assert.deepEqual(zipArray([1,0,3.4,9],[-5,6,7,80,432,32]),[ [ 1, -5 ], [ 0, 6 ], [ 3.4, 7 ], [ 9, 80 ] ]);
