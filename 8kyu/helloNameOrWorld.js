// if name has input
// then change first letter of name toUpperCase
// additionally change the rest toLowerCase by starting at the index of 1
// and having no end because we want the remainder of the string to be lower case
// else input "World" instead of name

function hello(name) {
  return `Hello, ${
    name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"
  }!`;
}

// Testcase
// Test.assertSimilar(hello('johN'), 'Hello, John!', "returns 'Hello, John!' when given 'johN'")
// Test.assertSimilar(hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'")
// Test.assertSimilar(hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given")
// Test.assertSimilar(hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty String" )
