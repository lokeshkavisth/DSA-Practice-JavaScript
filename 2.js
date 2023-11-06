let arr = [4, 4, 5, 7, 7, 6];

function findThirdMax(arr) {
  // sort the array

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  const set = new Set(arr);
  //   const result = Array.from(set);

  let count = 0;

  let result;
  set.forEach((val) => {
    count++;

    // if (set.size === 1 && count === 1) {
    //   result = val;
    // }
    // if (set.size === 2 && count === 2) {
    //   result = val;
    // }
    if (count === 3) {
      result = val;
    }
  });

  return result;
}

console.log(findThirdMax(arr));
