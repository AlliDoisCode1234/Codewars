String.prototype.includes()

// The includes() method performs a case-sensitive 
// search to determine whether one string may be 
// found within another string, returning true or 
// false as appropriate.


// 
// Example 1
// 

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"



// 
// Example 2
// 

includes(searchString)
includes(searchString, position)

// 
// Example 3
// 

const str = 'To be, or not to be, that is the question.'

console.log(str.includes('To be'))        // true
console.log(str.includes('question'))     // true
console.log(str.includes('nonexistent'))  // false
console.log(str.includes('To be', 1))     // false
console.log(str.includes('TO BE'))        // false
console.log(str.includes(''))             // true