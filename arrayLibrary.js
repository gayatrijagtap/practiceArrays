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

const findUnion = function(numbers1,numbers2,unionArray) {
  for(let i=0; i<numbers1.length; i++) {
    let element = numbers1[i];
    if(!numbers2.includes(element)) {
      unionArray.push(element);
    }
  }
  return unionArray;
}

const createUnion = function(numbers1,numbers2) {
  let unionArray = [];
  unionArray = findUnion(numbers1,numbers2,unionArray);
  unionArray = findUnion(numbers2,numbers1,unionArray);
  return unionArray;
}

const checkAscendingOrder = function(numbers) {
  for(let i=0; i<numbers.length; i++) {
    if(numbers[i]>numbers[i+1]) {
      return false;
    }
  }
  return true;
}

const countEvens = function(numbers) {
  let count = 0;
  for(let i=0; i<numbers.length; i++) {
    if(numbers[i]%2 == 0){
      count++;
    }
  }
  return count;
}

const countOdds = function(numbers) {
  let count = 0;
  for(let i=0; i<numbers.length; i++) {
    if(numbers[i]%2 != 0){
      count++;
    }
  }
  return count;
}

const checkDescendingOrder = function(numbers) {
  for(let i=0; i<numbers.length; i++) {
    if(numbers[i]<numbers[i+1]) {
      return false;
    }
  }
  return true;
}

const extractDigits = function(number) {
  string = number.toString()
  numbers = string.split('');
  return numbers;
}

const genAverage = function(numbers) {
  let sum = 0;
  for(let i=0; i<numbers.length; i++) {
    sum = sum+numbers[i];
  }
  return sum/numbers.length;
}

const greatestNumber = function(numbers) {
  let greatestNum = numbers[0];
  for(let i=0; i<numbers.length; i++) {
    if(numbers[i]>greatestNum) {
      greatestNum = numbers[i];
    }
  }
  return greatestNum;
}

const indexOfNumber = function(numbers,number) {
  for(let i=0; i<numbers.length; i++) {
    if(numbers[i] == number) {
      return i;
    }
  }
  return "unmatched";
}

const isSubset = function (numbers1,numbers2) {
  for(let i=0; i<numbers1.length; i++) {
    let number = numbers1[i];
    if(!numbers2.includes(number)) {
      return false;
    }
  }
  return true;
}

const mapLengths = function(strings) {
  let stringLengths = [];
  for(let i=0; i<strings.length; i++) {
    stringLengths[i]=strings[i].length;
  }
  return stringLengths;
}

const partitionArray = function(numbers,number) {
  let position = indexOfNumber(numbers,number);
  let firstPartition = [];
  let secondPartition = [];
  let index = 0;
  for(let i=0; i<position;i++ ) {
    firstPartition[i] = numbers[i];
  }
  for(let i=position; i<numbers.length; i++) {
    secondPartition[index]=numbers[i];
    index++;
  }
  let partition = [firstPartition,secondPartition];
  return partition;
}

const reverse = function(numbers) {
  let index=0;
  let reversedArray = [];
  for(let i=numbers.length-1; i>=0; i--) {
    reversedArray[index]=numbers[i];
    index++;
  }
  return(reversedArray);
}

const createReverseFibo = function(limit) {
  let series = [0,1];
  let a=0;
  let b=1;
  let sum=0;
  for(let i=2; i<limit; i++) {
    sum=a+b;
    a=b;
    b=sum;
    series[i]=sum;
  }
  return reverse(series);
}

const printEvenSeries = function(numbers) {
  let series = [];
  let seriesIndex = 0;
  for(let i=0;i<numbers.length; i++) {
    if(numbers[i]%2 == 0) {
      series[seriesIndex]=numbers[i];
      seriesIndex++;
    }
  }
  return series;
}

const selectSecondElement = function(numbers) {
  let selectedElements = [];
  let index = 0;
  for(let i=0; i<numbers.length; i= i+2) {
    selectedElements[index]=numbers[i];
    index++;
  }
  return selectedElements;
}

const printOddSeries = function(numbers) {
  let series = [];
  let seriesIndex = 0;
  for(let i=0;i<numbers.length; i++) {
    if(numbers[i]%2 != 0) {
      series[seriesIndex]=numbers[i];
      seriesIndex++;
    }
  }
  return series;
}
exports.oddSeries=printOddSeries

exports.selectElements=selectSecondElement;

exports.evenSeries=printEvenSeries;

exports.createReverseFibo = createReverseFibo;

exports.reverse = reverse;

exports.partitionArray = partitionArray;

exports.mapLengths = mapLengths;

exports.isSubset = isSubset;

exports.indexOfNumber = indexOfNumber;
exports.greatestNum=greatestNumber;

exports.genAverage=genAverage;

exports.extractDigits = extractDigits;

exports.checkDescendingOrder=checkDescendingOrder;

exports.countOdds = countOdds;

exports.countEvens = countEvens

exports.checkAscendingOrder=checkAscendingOrder;

exports.createUnion = createUnion;

exports.createIntersection = createIntersection;

exports.genDifference = genDiff;

exports.extractUniqueElements=extractUniqueElements;

exports.numbersBelowThreshold = numbersBelowThreshold;

exports.numbersAboveThreshold = numbersAboveThreshold;
