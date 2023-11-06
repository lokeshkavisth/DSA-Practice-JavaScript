// Chase on the Number Line

// A painter discovered that one of his painting has been stolen. He immediately informs the police of the theft.

// It is known that the policeman and thief move on the number line.

// You are given that:

// The initial location of the policeman on the number line is X and his speed is 2 units per second. The initial location of the thief on the number line is Y and his speed is 1 unit per second.

// Find the minimum time (in seconds) in which the policeman can catch the thief. Note that, the policeman catches the thief as soon as their locations become equal and the thief will try to evade the policeman for as long as possible.

// Example 1:
// Input:
// X = 0, Y = 0

// Output:
// 0

// Example 2:
// Input:
// X = 5, Y = 10

// Output:
// 5

// Example 3:
// Input:
// X = -5, Y = 10

// Output:
// 15

function catchThief(X, Y) {
  // formula
  // time = distance/speed

  const time = (X - Y) / (2 - 1);
  console.log(typeof time, Math.abs(time));
}

catchThief(3, 5);
