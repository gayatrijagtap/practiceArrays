const sort = function(numbers) {
  let temp;
  for(let i=0; i<numbers.length; i++) {
    for(let j=i; j<numbers.length; j++) {
      if(numbers[i] > numbers[j+1]) {
        temp = numbers[i];
        numbers[i] = numbers[j+1];
        numbers[j+1] = temp;
      }
    }
  }
  return numbers;
}

console.log(sort([1,5,2,6,9,8,4]));
