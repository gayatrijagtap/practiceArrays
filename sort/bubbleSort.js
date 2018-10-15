const sort = function(numbers) {
  let temp;
  for (let i=0; i<numbers.length; i++) {
    for (let j=0; j<numbers.length; j++) {
      if(numbers[j]>numbers[j+1]) {
        temp = numbers[j];
        numbers[j] = numbers[j+1];
        numbers[j+1] = temp;
      }
    }
  }
  return numbers;
}

console.log(sort([2,1,0,5,7,9,8,6]));
