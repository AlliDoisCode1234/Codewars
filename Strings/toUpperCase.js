String.prototype.toUpperCase()

// The toUpperCase() method returns the calling 
// string value converted to uppercase (the value 
// will be converted to a string if it isn't one).



// 
// Example 1
// 


const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."


// 
// Example 2
// 

toUpperCase()

// 
// Example 3
// 

const a = String.prototype.toUpperCase.call({
    toString: function toString() {
        return 'abcdef';
    }
});

const b = String.prototype.toUpperCase.call(true);

// prints out 'ABCDEF TRUE'.
console.log(a, b);