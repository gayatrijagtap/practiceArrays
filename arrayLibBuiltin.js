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

