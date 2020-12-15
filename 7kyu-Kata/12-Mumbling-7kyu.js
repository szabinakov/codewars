// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//Solution:
function accum(string) {
  const splitStr = string.split("");
  const emptyArr = [];

  for (let i = 0; i < splitStr.length; i++) {
    let repeatedLetters = splitStr[i].repeat([i + 1]).toLowerCase();
    emptyArr.push(
      repeatedLetters.charAt(0).toUpperCase() + repeatedLetters.slice(1)
    );
  }
  const finalStr = emptyArr.join("-");
  return finalStr;
}
