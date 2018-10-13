const printOddSeries = function(numbers) {
  let series = [];
  let seriesIndex = 0;
  for(let i=0;i<numbers.length; i++) {
    if(numbers[i]%2 != 0) {
      series[seriesIndex]=numbers[i];
      seriesIndex++;
    }
  }
  return series;
}
exports.oddSeries=printOddSeries;
