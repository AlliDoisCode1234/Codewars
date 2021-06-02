String.prototype.substr()

// The substr() method returns a portion of 
// the string, starting at the specified index 
// and extending for a given number of characters 
// afterwards.


// 
// Example 1
// 

const str = 'Mozilla';

console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"


// 
// Example 2
// 

substr(start)
substr(start, length)

// 
// Example 3
// 


var aString = 'Mozilla';

console.log(aString.substr(0, 1));   // 'M'
console.log(aString.substr(1, 0));   // ''
console.log(aString.substr(-1, 1));  // 'a'
console.log(aString.substr(1, -1));  // ''
console.log(aString.substr(-3));     // 'lla'
console.log(aString.substr(1));      // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2));  // ''