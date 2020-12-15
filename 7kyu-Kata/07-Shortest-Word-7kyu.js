// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//Solution:
function findShort(s) {
  const array = s.split(" ");
  const lengthArray = [];

  for (i = 0; i < array.length; i++) {
    lengthArray.push(array[i].length);
  }
  return Math.min(...lengthArray);
}
