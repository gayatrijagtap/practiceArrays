const selectSecondElement = function(numbers) {
  let selectedElements = [];
  let index = 0;
  for(let i=0; i<numbers.length; i= i+2) {
    selectedElements[index]=numbers[i];
    index++;
  }
  return selectedElements;
}

exports.selectElements=selectSecondElement;
