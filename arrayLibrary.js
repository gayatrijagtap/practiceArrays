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

const extractUniqueElements = function(numbers) {
  let uniqueArray = [];
  for(let i=0; i<numbers.length; i++) {
    let number = numbers[i];
    if(!uniqueArray.includes(number)) {
      uniqueArray.push(number);
    }
  }
  return uniqueArray;
}

exports.extractUniqueElements=extractUniqueElements;

exports.numbersBelowThreshold = numbersBelowThreshold;

exports.numbersAboveThreshold = numbersAboveThreshold;
