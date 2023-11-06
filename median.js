/* find the median of an array  */

function findMedian(median) {
  const sortedMedian = median.sort((a, b) => a - b);
  const arrLength = sortedMedian.length;

  if (arrLength % 2 !== 0) {
    const medianIndex = Math.floor(arrLength / 2);
    return sortedMedian[medianIndex];
  } else {
    const firstVal = arrLength / 2;
    const secondVal = arrLength / 2 - 1;
    const avg = (sortedMedian[firstVal] + sortedMedian[secondVal]) / 2;

    return avg;
  }
}

const median = [1, 0, 3, -5, 4, 2];
const medianNumber = findMedian(median);
console.log(medianNumber);
