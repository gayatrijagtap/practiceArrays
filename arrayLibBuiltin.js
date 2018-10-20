//-----------------extracting even numbers in an array-------------------------

const selectEvens = function(numbers) {
 let evenElements = numbers.filter( function(element) { return element%2 == 0 } )
  return evenElements;
}

exports.selectEvens = selectEvens;

//------------------extracting odd numbers in an array--------------------------

const selectOdds = function(numbers) {
 let oddElements = numbers.filter( function(element) { return element%2 != 0 } )
  return oddElements;
}

exports.selectOdds = selectOdds;

//-------------------find sum of all elements of an array------------------------

const findSum = function(numbers) {
  let sum = numbers.reduce( function( firstElement,secondElement ) { return firstElement+secondElement; } )
  return sum;
}

exports.findSum = findSum;

//--------------------reverse array elements---------------------------------------

const reverse = function(numbers) {
  let reversedNumbers = numbers.reduce( function( firstElement,secondElement ) { firstElement.unshift(secondElement); return firstElement; } , [] )
  return reversedNumbers;
}

exports.reverse = reverse;

//------------------------print every second element in an array-------------------------

const selectAlternates = function(numbers) {
  let alternates = numbers.filter( function( element,index ) { return index%2 == 0;} )
  return alternates;
}

exports.selectAlternates = selectAlternates;

//-------------------------finding the greatest number in an array -------------------------

const findGreatestNumber = function(numbers) {
  let greatestNumber = numbers.reduce(function(firstElement,secondElement) { if(firstElement>secondElement) return firstElement; return secondElement; } )
  return greatestNumber;
}

exports.findGreatestNumber = findGreatestNumber;

//--------------------------finding the smallest number in an array--------------------------

const findSmallestNumber = function(numbers) {
  let smallestNumber = numbers.reduce(function(firstElement,secondElement) { if(firstElement<secondElement) return firstElement; return secondElement; } )
  return smallestNumber;
}

exports.findSmallestNumber = findSmallestNumber;

//----------------------------find the average of all the elements in an array-------------------

const findAverage = function(numbers) {
  let average = numbers.reduce(function(firstElement,secondElement) { return firstElement+secondElement; }) / numbers.length;
  return average;
}

exports.findAverage = findAverage;

//-----------------------------map the length of an array elements---------------------------------

const mapLengths = function(list) {
  let lengthsMapping = list.map(function(element) { return element.length; } )
  return lengthsMapping;
}

exports.mapLengths = mapLengths;

//------------------------------count even numbers in an array--------------------------------

const countEvens = function(numbers) {
  let count = 0;
  numbers.filter(function(element) { if (element%2 == 0) count++; return; } )
  return count;
}

exports.countEvens = countEvens;

//------------------------------count odd numbers in an array-----------------------------------

const countOdds = function(numbers) {
  let count = 0;
  numbers.filter(function(element) { if (element%2 != 0) count++; return; } )
  return count;
}

exports.countOdds = countOdds;
