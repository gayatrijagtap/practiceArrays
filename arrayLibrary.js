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

const genDiff = function(numbers1,numbers2) {
  let diffArray = [];
  for(let i=0; i<numbers1.length; i++) {
    let number = numbers1[i];
    if(!numbers2.includes(number)) {
      diffArray.push(number);
    }
  }
  return diffArray;
}

const findIntersection = function(numbers1,numbers2,intersectionArray) {
  for(let i=0; i<numbers1.length; i++) {
    let element = numbers1[i];
    if(numbers2.includes(element)) {
      intersectionArray.push(element);
    }
  }
  return intersectionArray;
}

const createIntersection = function(numbers1,numbers2) {
  let intersectionArray = [];
  intersectionArray = findIntersection(numbers1,numbers2,intersectionArray);
  intersectionArray = findIntersection(numbers2,numbers1,intersectionArray);
  intersectionArray = extractUniqueElements(intersectionArray);
  return intersectionArray;
}

exports.createIntersection = createIntersection;

exports.genDifference = genDiff;

exports.extractUniqueElements=extractUniqueElements;

exports.numbersBelowThreshold = numbersBelowThreshold;

exports.numbersAboveThreshold = numbersAboveThreshold;
