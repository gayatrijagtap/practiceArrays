const indexOfNumber = function(numbers,number) {
  for(let i=0; i<numbers.length; i++) {
    if(numbers[i] == number) {
      return i;
    }
  }
  return "unmatched";
}

exports.indexOfNumber = indexOfNumber;
