// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// My First Solution:
function digital_root(n) {
  const theNum = n
    .toString()
    .split("")
    .map((n) => parseInt(n))
    .reduce((a, b) => a + b);

  const backToString = theNum.toString();

  if (backToString.length > 1) {
    return theNum
      .toString()
      .split("")
      .map((n) => parseInt(n))
      .filter((element) => element !== 0)
      .reduce((a, b) => a + b)
      .toString()
      .split("")
      .map((n) => parseInt(n))
      .filter((element) => element !== 0)
      .reduce((a, b) => a + b);
  } else {
    return theNum;
  }
}

//My newer, shorter solution:

function digital_root(n) {
  let sum = n;
  let array = [];
  const reducer = (a, b) => parseInt(a) + parseInt(b);

  while (sum > 9) {
    array = sum.toString().split("");
    sum = array.reduce(reducer);
  }
  return sum;
}
