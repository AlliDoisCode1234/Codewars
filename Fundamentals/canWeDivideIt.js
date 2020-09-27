function isDivideBy(number, a, b) {
  // input three variables
  // test if integer is divisble by each out of two arguments

  if (number % a !== 0 || number % b !== 0) {
    return false;
  } else {
    return true;
  }
}

// testCase
// Test.assertSimilar(isDivideBy(-12, 2, -6), true);
// Test.assertSimilar(isDivideBy(-12, 2, -5), false);
// Test.assertSimilar(isDivideBy(45, 1, 6), false);
// Test.assertSimilar(isDivideBy(45, 5, 15), true);
// Test.assertSimilar(isDivideBy(4, 1, 4), true);
// Test.assertSimilar(isDivideBy(15, -5, 3), true);
