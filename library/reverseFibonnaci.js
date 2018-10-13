const createSeries = function(limit) {
  let series = [0,1];
  let a=0;
  let b=1;
  let sum=0;
  for(let i=2; i<limit; i++) {
    sum=a+b;
    a=b;
    b=sum;
    series[i]=sum;
  }
  return series;
}
const createReverse = function(series) {
  let reversedSeries = [];
  let index = 0;
  for(let i=series.length-1; i>=0; i--) {
    reversedSeries[index] = series[i];
    index++;
  }
  return reversedSeries;
}
const main = function(number) {
  return createReverse(createSeries(number));
}
exports.main = main;
