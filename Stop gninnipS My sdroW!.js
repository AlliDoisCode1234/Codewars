// Reverse words that have 5 or more letters in an array
// An array should be passed through the function
// Array will contain One or More words
// Data Type : String
// End Goal? Th goal is to return th array of a string with all words, but only words with 5 letters or more will be returned reversed.

// Steps to Solve

// 1. Separate words in each string and log it's place in the array
// 2. Solve to see what words are 5 letters or more
// 3. If Word has 5 or more letters then reverse word
// 4. Concatenate original strings back together in array

const spinWords = (phrase) => {
  console.log(phrase);

  let phraseArray = phrase.split(" ");
  console.log(phraseArray);

  const reverseString = (string) => {
    return string.split("").reverse().join("");
  };

  for (let i = 0; i < phraseArray.length; i++) {
    if (phraseArray[i].length >= 5) {
      const word = phraseArray[i];
      phraseArray[i] = reverseString(word);
    }
  }

  return phraseArray.join(" ");
};
