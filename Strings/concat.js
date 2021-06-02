String.prototype.concat()

// The concat() method concatenates the string arguments 
// to the calling string and returns a new string.

// 
// Example 1
// 

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"




// 
// Example 2
// 

concat(str1)
concat(str1, str2)
// concat(str1, str2, ... , strN)

// 
// Example 3
// 

let hello = 'Hello, '
console.log(hello.concat('Kevin', '. Have a nice day.'))
// Hello, Kevin. Have a nice day.

let greetList = ['Hello', ' ', 'Venkat', '!']
"".concat(...greetList)  // "Hello Venkat!"

"".concat({})    // [object Object]
"".concat([])    // ""
"".concat(null)  // "null"
"".concat(true)  // "true"
"".concat(4, 5)  // "45"