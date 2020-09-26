const solution = (str) => {
  let finalArray = [];

  if (str.length % 2 !== 0) {
    str += "_"; // first we check if the length is odd. If its odd we add the underscore
  }
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (i % 2 !== 0) {
      // we check if the index is odd
      finalArray.push(str[i - 1] + letter); // if its odd, we push to the array the previous element and the current element. For when the length is odd,we add the underscore, but we seperate again in pairs of two, just the 2nd element is the underscore for that possibility
    }
  }
  return finalArray;
};
