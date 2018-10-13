const extractDigits = function(number) {
  string = number.toString()
  numbers = string.split('');
  return numbers;
}

exports.extractDigits = extractDigits;
