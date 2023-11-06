// Add your code in the main function only.
// a & b are example variables of how to take integer and string input
// readline function is for reading input

function divide(sortedArray, start, end, eleToSearch) {
  let z = 0;
  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (eleToSearch == sortedArray[mid].value) {
      z = sortedArray[mid].index;
      break;
    } else if (eleToSearch > sortedArray[mid].value) {
      start = mid + 1;
    } else if (eleToSearch < sortedArray[mid].value) {
      end = mid - 1;
    }
  }
  return z;
}

function makeObj(b) {
  let sortedArray = [];
  for (let i = 0; i < b.length; i++) {
    sortedArray.push({ value: b[i], index: i });
  }
  return sorBin(sortedArray);
}

function sorBin(sortedArray) {
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < sortedArray.length - i - 1; j++) {
      if (sortedArray[j].value > sortedArray[j + 1].value) {
        [sortedArray[j], sortedArray[j + 1]] = [
          sortedArray[j + 1],
          sortedArray[j],
        ];
      }
    }
  }
  return sortedArray;
}

function main() {
  var a = 5;
  const eleToSearch = 5;
  var b = [55, 88, 99, 5, 66];

  //   for (let i = 0; i < a; i++) {
  //     b.push(parseInt(readLine()));
  //   }

  console.log(divide(makeObj(b), 0, a - 1, eleToSearch));
}

main();
