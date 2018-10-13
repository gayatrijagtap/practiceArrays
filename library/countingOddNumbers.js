const countOdds = function(numbers) {
  let count = 0;
  for(let i=0; i<numbers.length; i++) {
    if(numbers[i]%2 != 0){
      count++;
    }
  }
  return count;
}
exports.countOdds = countOdds;
