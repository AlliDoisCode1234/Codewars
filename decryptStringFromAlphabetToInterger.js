// declare result to empty string
// create variable to store the digits
// handle stringed numbers by separating them accordingly
// loop through the string
// if current + 2 string is #
// push current string and current + 1 string
// increment i by 1
// else if current string is not #
// push current string
// handle converting number to alphabet
// iterate through array of digits
// concatenate corresponding character to result
// return result

const freqAlphabets = (s) => {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let cv = s[i];

    if (s[i + 2] === "#") {
      cv = s.slice(i, i + 2);
      i += 2;
    }
    result += String.fromCharCode(96 + Number(cv));
  }

  return result;
};

// Testcase
// "10#11#12"
