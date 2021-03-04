// get word and trim white space on either end
// replace with Regular Expression syntax
// change first letter to upperCase
// Return new string with capitalized first letter

function capitalizeWord(word) {
  let words = word.trim().replace(/^\w/, (c) => c.toUpperCase());
  return words;
}

// Testcase
// Test.assertSimilar(capitalizeWord('word'), 'Word');
// Test.assertSimilar(capitalizeWord('i'), 'I');
// Test.assertSimilar(capitalizeWord('glasswear'), 'Glasswear');
