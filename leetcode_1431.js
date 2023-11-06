const kidsWithCandies = function (candies, extraCandies) {
  // Find the maximum value of candies a child can have
  let maxCandies = Number.NEGATIVE_INFINITY;
  // Number.NEGATIVE_INFINITY = smallest possible value

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > maxCandies) {
      maxCandies = candies[i];
    }
  }

  let result = [];

  for (let i = 0; i < candies.length; i++) {
    maxCandies <= candies[i] + extraCandies
      ? (result = [...result, true])
      : (result = [...result, false]);
  }

  return result;
};

const candies = [12, 1, 12],
  extraCandies = 10;

console.log(kidsWithCandies(candies, extraCandies));
