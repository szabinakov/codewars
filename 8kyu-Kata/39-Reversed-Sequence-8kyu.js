// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 >> [5,4,3,2,1]
//Solution:
const reverseSeq = (n) => {
  let emptyArr = [];
  for (let i = 1; i < n + 1; i++) {
    emptyArr.push(i);
  }
  return emptyArr.reverse();
};
