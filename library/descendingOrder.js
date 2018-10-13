const checkDescendingOrder = function(numbers) {
  for(let i=0; i<numbers.length; i++) {
    if(numbers[i]<numbers[i+1]) {
      return false;
    }
  }
  return true;
}

exports.checkDescendingOrder=checkDescendingOrder;
