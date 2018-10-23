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

//--------------------------------find numbers below certain threshold----------------------------

const findNumBelowThreshold  = function(numbers,number) {
  let count = 0;
  numbers.filter(function(element) { if(element<number) count++; } )
  return count;
}

exports.findNumBelowThreshold = findNumBelowThreshold;

//------------------------------find numbers above certain threshold------------------------------

const findNumAboveThreshold = function(numbers,number) {
  let count = 0;
  numbers.filter(function(element) { if(element>number) count++; } )
  return count;
}

exports.findNumAboveThreshold = findNumAboveThreshold;

//-----------------------------find index of the number---------------------------------------------

const findIndex = function(numbers,number) {
  let index = 0;
  numbers.filter(function(element,position) { if(element == number) index = position; return; } )
  return index;
}

exports.findIndex = findIndex;

//-------------------------------find the unique elements in an array by removing duplicates------------

const findUniques = function(list) {
  let uniqueElements = [];
  list.filter(function(element) { if( !uniqueElements.includes(element) ) uniqueElements.push( element ); return; } )
  return uniqueElements;
}

exports.findUniques = findUniques;

//------------------------------find the union of two arrays--------------------------------------

const findUnion = function(firstList,secondList) {
  let unionList = [];
  firstList.filter(function(element) { if(!secondList.includes(element)) unionList.push(element); return; } )
  secondList.filter(function(element) { if(!firstList.includes(element)) unionList.push(element); return; } )
  return unionList;
}

exports.findUnion = findUnion;

//--------------------------------find the intersection of two arrays--------------------------------

const findIntersection = function(firstList,secondList) {
  let intersectionList = [];
  firstList.filter(function(element) { if(!secondList.includes(element)) intersectionList.push(element); return; } )
  secondList.filter(function(element) { if(!intersectionList.includes(element)) intersectionList.push(element); return; } )
  return intersectionList;
}

exports.findIntersection = findIntersection;

//---------------------------------find the difference between two arrays--------------------------------

const findDifference = function(firstList,secondList) {
  let difference = [];
  firstList.filter(function(element) { if(!secondList.includes(element)) difference.push(element); return; } )
  return difference;
}

exports.findDifference = findDifference;

//---------------------------------check if first list is subset of second list------------------------------

const isSubset = function(firstList,secondList) {
  return firstList.every(function(element) { return secondList.includes(element); } );
}

exports.isSubset = isSubset;

//----------------------------------checks if the given list is in ascending order or not------------------------

const isAscending = function(list) {
  let state = { prevState : true , prevElement : list[0] };
  list.reduce(function(state,currentElement) { 
    let { prevState,prevElement } = state;
    state.prevState = (prevElement <= currentElement) && prevState;
    state.prevElement = currentElement;
    return state; 
  } , state
  )
  return state.prevState;
}

exports.isAscending = isAscending;

//-------------------------------------checks if the given list is in descending order or not-----------------------

const isDescending = function( list ) {
  let state = { prevState : true , prevElement : list[ 0 ] };
  list.reduce(function ( state,currentElement ) { 
    let { prevState,prevElement } = state;
    state.prevState = ( prevElement >= currentElement ) && prevState;
    state.prevElement = currentElement;
    return state; 
  } , state
  )
  return state.prevState;
}

exports.isDescending = isDescending;

//--------------------------------------zip two arrays---------------------------------------------

const zipLists = function( firstList,secondList ) {
  let state = { index:0 , value:[] };
  return firstList.reduce( function( state,element ) {
    state.value[ state.index ] = [ element,secondList[ state.index ] ];
    state.index++;
    return state;
  } , state ).value;
}

exports.zipLists = zipLists;
