const smallestNumber = function(numbers) {
  let smallestNum = numbers[0];
  for(let i=0; i<numbers.length; i++) {
    if(numbers[i]<smallestNum) {
      smallestNum = numbers[i];
    }
  }
  return smallestNum;
}
exports.smallestNum=smallestNumber;
