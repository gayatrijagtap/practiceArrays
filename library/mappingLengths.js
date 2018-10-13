const mapLengths = function(strings) {
  let stringLengths = [];
  for(let i=0; i<strings.length; i++) {
    stringLengths[i]=strings[i].length;
  }
  return stringLengths;
}

exports.mapLengths = mapLengths;
