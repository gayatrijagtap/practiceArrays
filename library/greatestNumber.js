const greatestNumber = function(numbers) {
  let greatestNum = numbers[0];
  for(let i=0; i<numbers.length; i++) {
    if(numbers[i]>greatestNum) {
      greatestNum = numbers[i];
    }
  }
  return greatestNum;
}
exports.greatestNum=greatestNumber;
