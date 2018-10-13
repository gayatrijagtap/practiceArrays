const reverse = function(numbers) {
  let index=0;
  let reversedArray = [];
  for(let i=numbers.length-1; i>=0; i--) {
    reversedArray[index]=numbers[i];
    index++;
  }
  return(reversedArray);
}
exports.reverse = reverse;
