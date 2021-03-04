const squareDigits = (num) => {
  // Get an array of digits
  const digits = num.toString().split("");

  // Square each digit. Because JS has automatic type coercion, it will quietly
  // convert each string into a number to perform multiplication

  const squaredDigits = digits.map((n) => n * n);

  // Join each digit back together, then use the + operator
  // to convert the string into a number
  const squaredNumber = squaredDigits.join("");

  return +squaredNumber;
};

// Testcase:
// Test.assertEquals(squareDigits(9119), 811181);
