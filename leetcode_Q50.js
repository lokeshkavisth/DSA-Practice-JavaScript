let x = 2.0,
  n = -4;

const myPow = function (x, n) {
  let output = 0;

  if (n > 1) {
    while (n > 1) {
      if (output === 0) {
        output = x * x;
      } else {
        output = output * x;
      }

      n--;
    }

    return output;
  } else if (n < -1) {
    while (n < -1) {
      if (output === 0) {
        output = x * x;
      } else {
        output = output * x;
      }
      n++;
    }
    return 1 / output;
  }
};

console.log(myPow(x, n));
