//-----------------extracting even numbers in an array-------------------------

const selectEvens = function(numbers) {
  const isEven = function( element ) {
    return element%2 == 0;
  }
  let evenElements = numbers.filter( isEven )
  return evenElements;
}

exports.selectEvens = selectEvens;

//------------------extracting odd numbers in an array--------------------------

const selectOdds = function(numbers) {
  const isOdd = function(element)
  {
    return element%2 != 0; 
  }
  let oddElements = numbers.filter( isOdd );
  return oddElements;
}

exports.selectOdds = selectOdds;

//-------------------find sum of all elements of an array------------------------

const findSum = function(numbers) {
  const sum = function( firstElement,secondElement ) 
  { 
    return firstElement+secondElement; 
  }
  return numbers.reduce( sum );
}

exports.findSum = findSum;

//--------------------reverse array elements---------------------------------------

const reverse = function(numbers) {
  const reverseNumbers = function( firstElement,secondElement ) 
  { 
    firstElement.unshift(secondElement); return firstElement; 
  }
  let reversedNumbers = numbers.reduce( reverseNumbers, [] );
  return reversedNumbers;
}

exports.reverse = reverse;

//------------------------print every second element in an array-------------------------

const selectAlternates = function(numbers) {
  let object = { index: 0 , value: [] };
  const findAlternates = function(object,element) {
    if(object.index%2 == 0) {
      object.value.push(element); 
    } 
    object.index++; 
    return object;
  }
  let alternates = numbers.reduce( findAlternates,object )
  return alternates.value;
}

exports.selectAlternates = selectAlternates;

//-------------------------finding the greatest number in an array -------------------------

const findGreatestNumber = function(numbers) {
  const findGreatest = function(firstElement,secondElement) {  
    if( firstElement>secondElement ) {
      return firstElement; 
    }
    return secondElement;
  }
  let greatestNumber = numbers.reduce( findGreatest );
  return greatestNumber;
}

exports.findGreatestNumber = findGreatestNumber;

//--------------------------finding the smallest number in an array--------------------------

const findSmallestNumber = function(numbers) {
  const findSmallest = function( firstElement,secondElement ) {
    if(firstElement<secondElement) 
    {
      return firstElement;
    }
    return secondElement;
  }
  let smallestNumber = numbers.reduce( findSmallest );
  return smallestNumber;
}

exports.findSmallestNumber = findSmallestNumber;

//----------------------------find the average of all the elements in an array-------------------

const findAverage = function(numbers) {
  const calcSum = function( firstElement,secondElement )   
  {
    return firstElement+secondElement; 
  }
  let average = numbers.reduce( calcSum ) / numbers.length;
  return average;
}

exports.findAverage = findAverage;

//-----------------------------map the length of an array elements---------------------------------

const mapLengths = function(list) {
  const findStringLengths = function(element) { 
    return element.length; 
  }
  let lengthsMapping = list.map( findStringLengths );
  return lengthsMapping;
}

exports.mapLengths = mapLengths;

//------------------------------count even numbers in an array--------------------------------

const countEvens = function(numbers) {
  let count = 0;
  const isEven = function(element) { 
    if (element%2 == 0) 
      count++; 
    return;
  }
  numbers.filter( isEven );
  return count;
}

exports.countEvens = countEvens;

//------------------------------count odd numbers in an array-----------------------------------

const countOdds = function(numbers) {
  let count = 0;
  const isOdd = function(element) { 
    if (element%2 != 0) 
      count++;
    return; 
  }
  numbers.filter( isOdd );
  return count;
}

exports.countOdds = countOdds;

//--------------------------------find numbers below certain threshold----------------------------

const findNumBelowThreshold  = function(numbers,number) {
  let count = 0;
  const countElements = function(element) { 
    if(element<number)
      count++;
    return;
  }
  numbers.filter( countElements );
  return count;
}

exports.findNumBelowThreshold = findNumBelowThreshold;

//------------------------------find numbers above certain threshold------------------------------

const findNumAboveThreshold = function(numbers,number) {
  let count = 0;
  const countElements = function(element) { 
    if(element>number)
      count++;
    return;
  }
  numbers.filter( countElements );
  return count;
}

exports.findNumAboveThreshold = findNumAboveThreshold;

//-----------------------------find index of the number---------------------------------------------

const findIndex = function(numbers,number) {
  let state = { index:0 , value:0 };
  const findElementPosition = function( state,element ) {
    if( element == number ) {
      state.value = state.index;
    return state;
    }
    state.index++;
    return state; 
  }
  return numbers.reduce( findElementPosition , state ).value;
}

exports.findIndex = findIndex;

//-------------------------------find the unique elements in an array by removing duplicates------------

const findUniques = function(list) {
  let uniqueElements = [];
  const findUniqueElements = function(element) { 
    if( !uniqueElements.includes(element) )
      uniqueElements.push( element ); 
    return; 
  }
  list.filter( findUniqueElements );
  return uniqueElements;
}

exports.findUniques = findUniques;

//------------------------------find the union of two arrays--------------------------------------

const findUnion = function(firstList,secondList) {
  let unionList = [];
  const findUnionElements = function( element ) {
    if( ! list2.includes( element ) ) 
      unionList.push( element );
    return;
  }
  let list1 = firstList;
  let list2 = secondList;
  firstList.filter( findUnionElements );
  list2 = firstList;
  list1 = secondList;
  secondList.filter( findUnionElements );
  return unionList;
}

exports.findUnion = findUnion;

//--------------------------------find the intersection of two arrays--------------------------------

const findIntersection = function(firstList,secondList) {
  let intersectionList = [];
  const findIntersectionElements = function(element) { 
    if( !list2.includes(element)) 
      intersectionList.push(element); 
    return;
  }
  let list1 = firstList;
  let list2 = secondList;
  firstList.filter( findIntersectionElements );
  list1 = secondList;
  list2 = intersectionList;
  secondList.filter( findIntersectionElements );
  return intersectionList;
}

exports.findIntersection = findIntersection;

//---------------------------------find the difference between two arrays--------------------------------

const findDifference = function(firstList,secondList) {
  let difference = [];
  const findElementDifference = function(element) { 
    if( !secondList.includes(element) ) 
      difference.push( element ); 
    return; 
  }
  firstList.filter( findElementDifference );
  return difference;
}

exports.findDifference = findDifference;

//---------------------------------check if first list is subset of second list------------------------------

const isSubset = function(firstList,secondList) {
  const findSubset = function( element ) { 
    return secondList.includes( element ); 
  }
  return firstList.every( findSubset );
}

exports.isSubset = isSubset;

//----------------------------------checks if the given list is in ascending order or not------------------------

const isAscending = function(list) {
  let state = { prevState : true , prevElement : list[0] };

  const isGreater = function(state,currentElement) { 
    let { prevState,prevElement } = state;
    state.prevState = (prevElement <= currentElement) && prevState;
    state.prevElement = currentElement;
    return state; 
  }

  return list.reduce( isGreater , state ).prevState;
}

exports.isAscending = isAscending;

//-------------------------------------checks if the given list is in descending order or not-----------------------

const isDescending = function( list ) {
  let state = { prevState : true , prevElement : list[0] };

  const isSmaller = function(state,currentElement) { 
    let { prevState,prevElement } = state;
    state.prevState = (prevElement >= currentElement) && prevState;
    state.prevElement = currentElement;
    return state; 
  }

  return list.reduce( isSmaller , state ).prevState;
}

exports.isDescending = isDescending;

//--------------------------------------zip two arrays---------------------------------------------

const zipLists = function( firstList,secondList ) {
  let state = { index:0 , value:[] };
  const createZip = function( state,element ) {
    state.value[ state.index ] = [ element,secondList[ state.index ] ];
    state.index++;
    return state;
  }
  return firstList.reduce( createZip , state ).value;
}

exports.zipLists = zipLists;

//--------------------------------------rotate array elements--------------------------------------------

const rotate = function( list,position ) {
  return list.slice( position,list.length ).concat( list.slice( 0,position ) );
}

exports.rotate = rotate;

//---------------------------------------partition the list------------------------------------------------

const partition = function( list,partitioner ) {
  let partitionHolder = { firstPartition : [] , secondPartition : [] };
  const createPartition = function( partitionHolder,listElement ) { 
    if( listElement<partitioner ) {
      partitionHolder.firstPartition.push( listElement );
      return partitionHolder; 
    }
    partitionHolder.secondPartition.push( listElement ); 
    return partitionHolder; 
  }
  result = list.reduce( createPartition , partitionHolder );
  return [ result.firstPartition,result.secondPartition ];
}

exports.partition = partition;
