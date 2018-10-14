const numbersAboveThreshold = function(numbers,number) {
  let count = 0;
  for(let i=0; i<numbers.length; i++) {
    if(numbers[i]>number) {
      count++;
    }
  }
  return count;
}

const numbersBelowThreshold = function(numbers,number) {
  let count = 0;
  for(let i=0; i<numbers.length; i++) {
    if(numbers[i]<number) {
      count++;
    }
  }
  return count;
}

exports.numbersBelowThreshold = numbersBelowThreshold;

exports.numbersAboveThreshold = numbersAboveThreshold;
