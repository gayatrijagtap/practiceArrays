/*This function counts how many numbers are above a certain threshold in an array*/

const countNumbersAboveThreshold = function( numbers,number ) {
  let count = 0;
  for ( let index = 0; index < numbers.length; index++ ) {
    if ( numbers[index] > number ) {
      count++;
    } 
  }
  return count;
}

/* This function counts how many numbers below a certain threshold in an array*/

const countNumbersBelowThreshold = function( numbers,number ) {
  let count = 0;
  for ( let index = 0; index < numbers.length; index++ ) {
    if ( numbers[index] < number ) {
      count++;
    }
  }
  return count;
}

/*Given an array, remove duplicate elements and return an array of only unique elements.*/

const extractUniqueElements = function( numbers ) {
  let uniqueArray = [];
  for ( let index = 0; index < numbers.length; index++ ) {
    let number = numbers[index];
    if ( !uniqueArray.includes( number ) ) {
      uniqueArray.push( number );
    }
  }
  return uniqueArray;
}

/* Given two arrays, generate a new array that consists of unique elements that are present in the first array, but not in the second.*/

const generateDifference = function( firstArray,secondArray ) {
  let differenceArray = [];
  for ( let index = 0; index < firstArray.length; index++ ) {
    let element = firstArray[index];
    if ( !secondArray.includes( element ) ) {
      differenceArray.push( element );
    }
  }
  return differenceArray;
}

/*Given two arrays, gives the elements that are contained in both the arrays*/

const findIntersection = function( firstArray,secondArray,intersectionArray ) {
  for ( let index = 0; index < firstArray.length; index++ ) {
    let element = firstArray[index];
    if ( secondArray.includes( element ) ) {
      intersectionArray.push( element );
    }
  }
  return intersectionArray;
}

/*Given two arrays, generate a new array consisting of unique elements that are contained in both arrays.*/

const createIntersection = function( firstArray,secondArray ) {
  let intersectionArray = [];
  intersectionArray = findIntersection( firstArray,secondArray,intersectionArray );
  intersectionArray = findIntersection( firstArray,secondArray,intersectionArray );
  intersectionArray = extractUniqueElements( intersectionArray );
  return intersectionArray;
}

/*Given two arrays, gives the new array consisting of the elements which are included in both the arrays.*/

const findUnion = function( firstArray,secondArray,unionArray ) {
  for (let index = 0; index < firstArray.length; index++) {
    let element = firstArray[index];
    if ( !secondArray.includes( element ) ) {
      unionArray.push( element );
    }
  }
  return unionArray;
}

/*Given two arrays, generate a new array consisting of unique elements across both those arrays.*/

const createUnion = function( firstArray,secondArray ) {
  let unionArray = [];
  unionArray = findUnion( firstArray,secondArray,unionArray );
  unionArray = findUnion( secondArray,firstArray,unionArray );
  return unionArray;
}

/*Given an array of numbers, check if the array is in ascending order*/

const checkAscendingOrder = function( numbers ) {
  for ( let index = 0; index < numbers.length; index++ ) {
    if ( numbers[index] > numbers[index+1] ) {
      return false;
    }
  }
  return true;
}

/*A function to count how many even numbers are present in an array*/

const countEvens = function( numbers ) {
  let count = 0;
  for ( let index = 0; index < numbers.length; index++ ) {
    if ( numbers[index] % 2 == 0 ) {
      count++;
    }
  }
  return count;
}

/*A function to count how many odd numbers are present in an array*/

const countOdds = function( numbers ) {
  let count = 0;
  for ( let index = 0; index < numbers.length; index++ ) {
    if ( numbers[index] % 2 != 0 ){
      count++;
    }
  }
  return count;
}

/*Given an array of numbers, check if the array is in descending order*/

const checkDescendingOrder = function( numbers ) {
  for ( let index = 0; index < numbers.length; index++ ) {
    if ( numbers[index] < numbers[index+1] ) {
      return false;
    }
  }
  return true;
}

/*Given a number, extract the digits of a number into an array*/

const extractDigits = function( number ) {
  string = number.toString()
  numbers = string.split('');
  return numbers;
}

/*Given a list of numbers, find the average of that list*/

const genAverage = function( numbers ) {
  let sum = 0;
  for ( let index = 0; index < numbers.length; index++ ) {
    sum = sum + numbers[index];
  }
  return ( sum / numbers.length );
}

/*Given a list of numbers, find the greatest number in that sequence*/

const printGreatestNumber = function( numbers ) {
  let greatestNum = numbers[0];
  for ( let index = 0; index < numbers.length; index++ ) {
    if ( numbers[index] > greatestNum ) {
      greatestNum = numbers[index];
    }
  }
  return greatestNum;
}

/*Given an array of numbers find the first position of a specified number*/

const indexOfNumber = function( numbers,number ) {
  for ( let index = 0; index < numbers.length; index++ ) {
    if ( numbers[index] == number ) {
      return index;
    }
  }
  return "unmatched";
}

/*Given two arrays, check if the second is a proper subset of the first.*/

const isSubset = function ( firstArray,secondArray ) {
  for ( let index = 0; index < firstArray.length; index++ ) {
    let element = firstArray[index];
    if ( !secondArray.includes( element ) ) {
      return false;
    }
  }
  return true;
}

/*Given a list of names, generate another array that contains the length of each of the names*/

const mapLengths = function( strings ) {
  let stringLengths = [];
  for ( let index = 0; index < strings.length; index++ ) {
    stringLengths[index] = strings[index].length;
  }
  return stringLengths;
}

/*Given an array of numbers, it returns a partitioned array consisting of numbers above a certain number and below a certain number*/

const partitionArray = function( numbers,number ) {
  let position = indexOfNumber( numbers,number );
  let firstPartition = [];
  let secondPartition = [];
  let index = 0;
  for ( let count = 0; count < position; count++ ) {
    firstPartition[count] = numbers[count];
  }
  for ( let count = position; count < numbers.length; count++ ) {
    secondPartition[index] = numbers[count];
    index++;
  }
  let partition = [ firstPartition,secondPartition ];
  return partition;
}

/*Given a list of numbers, print the list in reverse order*/

const reverse = function( numbers ) {
  let index = 0;
  let reversedArray = [];
  for ( let count = numbers.length-1; count >= 0; count-- ) {
    reversedArray[index] = numbers[count];
    index++;
  }
  return reversedArray;
}

/*Generate a fibonacci sequence of length n in reverse order*/

const createReverseFibo = function( limit ) {
  let series = [ 0,1 ];
  let prevTerm = 0;
  let currentTerm = 1;
  let sum = 0;
  for ( let index = 2; index < limit; index++ ) {
    sum = prevTerm + currentTerm;
    prevTerm = currentTerm;
    currentTerm = sum;
    series[index] = sum;
  }
  return reverse( series );
}

/*Given a list of numbers, select the ones that are even*/

const printEvenSeries = function( numbers ) {
  let series = [];
  let seriesIndex = 0;
  for ( let index = 0; index < numbers.length; index++ ) {
    if ( numbers[index] % 2 == 0 ) {
      series[seriesIndex] = numbers[index];
      seriesIndex++;
    }
  }
  return series;
}

/*Given a list of numbers, select every second one*/

const selectSecondElement = function( numbers ) {
  let selectedElements = [];
  let count = 0;
  for ( let index = 0; index < numbers.length; index = index + 2 ) {
    selectedElements[count] = numbers[index];
    count++;
  }
  return selectedElements;
}

/*Given a list of numbers, select the ones that are odd*/

const printOddSeries = function( numbers ) {
  let series = [];
  let seriesIndex = 0;
  for ( let index = 0; index < numbers.length; index++ ) {
    if ( numbers[index] % 2 != 0 ) {
      series[seriesIndex] = numbers[index];
      seriesIndex++;
    }
  }
  return series;
}

/*Given a list of numbers, find the lowest number in that sequence*/

const printSmallestNumber = function( numbers ) {
  let smallestNum = numbers[0];
  for ( let index = 0; index < numbers.length; index++ ) {
    if ( numbers[index] < smallestNum ) {
      smallestNum = numbers[index];
    }
  }
  return smallestNum;
}

/*Given a list of numbers, find the sum of all these numbers*/

const sumOfArrayElement = function( numbers ) {
  let sum = 0;
  for ( let index = 0; index < numbers.length; index++ ) {
    sum = sum + numbers[index];
  }
  return sum;
}

/*Insert elements from two arrays and create zip*/

const zipArray = function( firstArray,secondArray ) {
  let zippedArray = [];
  let shortestLen = Math.min( firstArray.length,secondArray.length );
  for ( let index = 0; index < shortestLen; index++ ) {
    zippedArray[index] = [ firstArray[index],secondArray[index] ];
  }
  return zippedArray;
}

/*creates a new array by rotating elements from the given array.*/

const rotateArray = function( numbers,number ) {
  let rotatedArray = [];
  let index = 0;
  let position = indexOfNumber( numbers,number ); 
  for ( let count = position; count < numbers.length; count++ ) {
    rotatedArray[index] = numbers[count];
    index++;
  }
  for ( let count = 0; count < position; count++ ) {
    rotatedArray[index] = numbers[count];
    index++;
  }
  return rotatedArray;
}

//----------------------------exporting all the functions--------------------------------------------

exports.rotateArray = rotateArray;

exports.zipArray = zipArray;

exports.sum=sumOfArrayElement;

exports.smallestNum=printSmallestNumber;

exports.oddSeries=printOddSeries

exports.selectElements=selectSecondElement;

exports.evenSeries=printEvenSeries;

exports.createReverseFibo = createReverseFibo;

exports.reverse = reverse;

exports.partitionArray = partitionArray;

exports.mapLengths = mapLengths;

exports.isSubset = isSubset;

exports.indexOfNumber = indexOfNumber;

exports.greatestNum=printGreatestNumber;

exports.genAverage=genAverage;

exports.extractDigits = extractDigits;

exports.checkDescendingOrder=checkDescendingOrder;

exports.countOdds = countOdds;

exports.countEvens = countEvens

exports.checkAscendingOrder=checkAscendingOrder;

exports.createUnion = createUnion;

exports.createIntersection = createIntersection;

exports.generateDifference = generateDifference;

exports.extractUniqueElements=extractUniqueElements;

exports.numbersBelowThreshold = countNumbersBelowThreshold;

exports.numbersAboveThreshold = countNumbersAboveThreshold;
