String.prototype.replace()

// The replace() method returns a new string with 
// some or all matches of a pattern replaced by a 
// replacement. The pattern can be a string or a 
// RegExp, and the replacement can be a string or 
// a function to be called for each match. If 
// pattern is a string, only the first occurrence 
// will be replaced.

// The original string is left unchanged.


// 
// Example 1
// 

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"





// 
// Example 2
// 

replace(regexp, newSubstr)
replace(regexp, replacerFunction)

replace(substr, newSubstr)
replace(substr, replacerFunction)

// 
// Example 3
// 

const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"