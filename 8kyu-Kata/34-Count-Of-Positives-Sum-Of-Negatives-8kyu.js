// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//Solution:
function countPositivesSumNegatives(input) {
  let newArr = [0, 0];
  if (input == null || input.length == 0) {
    return [];
  } else {
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        newArr[0]++;
      } else {
        newArr[1] += input[i];
      }
    }
  }
  return newArr;
}
