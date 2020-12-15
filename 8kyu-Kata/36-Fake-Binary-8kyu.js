// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//Solution:

function fakeBin(x) {
  const newArrayOfStr = [];

  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      newArrayOfStr.push(0);
    } else {
      newArrayOfStr.push(1);
    }
  }
  return newArrayOfStr.join("");
}
