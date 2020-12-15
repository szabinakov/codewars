// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

//Solution:
function generateHashtag(str) {
  const splitSentenceInArray = str.split(" ");
  const emptyArr = [];
  for (let i = 0; i < splitSentenceInArray.length; i++) {
    emptyArr.push(
      splitSentenceInArray[i].charAt(0).toUpperCase() +
        splitSentenceInArray[i].slice(1)
    );
  }
  const finalWord = "#" + emptyArr.join("");

  if (emptyArr.join("") == 0) {
    return false;
  } else if (finalWord.length > 140 || finalWord == "# " || str === "") {
    return false;
  } else {
    return finalWord;
  }
}
