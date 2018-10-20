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

