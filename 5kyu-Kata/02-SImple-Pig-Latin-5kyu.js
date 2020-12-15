// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

//Solution:
function pigIt(str) {
  console.log(str);
  const strArr = str.split(" ");

  const emptyArr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].match(/\?|!/)) {
      emptyArr.push(strArr[i]);
    } else {
      emptyArr.push(
        strArr[i].slice(1, strArr[i].length + 1) + strArr[i].charAt(0) + "ay"
      );
    }
  }
  return emptyArr.join(" ");
}
