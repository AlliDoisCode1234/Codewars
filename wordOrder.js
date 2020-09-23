// Sort string
// Each word in string will contain a single number
// The number is the position the word should have in the result

// Note: Numbers 1-9, not 0 - 1 will be the first word

// If input string is empty, return an empty string
// Words in the input string will only contain valid consecutive numbers

const order = (words) => {
  const regex = /\d/;

  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(regex) - b.match(regex);
    })
    .join(" ");
};

Test.assertEquals(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
Test.assertEquals(
  order("4of Fo1r pe6ople g3ood th5e the2"),
  "Fo1r the2 g3ood 4of th5e pe6ople"
);
Test.assertEquals(order(""), "");
