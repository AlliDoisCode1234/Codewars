Array.prototype.includes()

// The includes() method determines whether an array 
// includes a certain value among its entries, returning 
// true or false as appropriate.

//
// Example 1
// 


const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false


//
// Example 2
// 

let arr = ['a', 'b', 'c']

arr.includes('a', -100) // true
arr.includes('b', -100) // true
arr.includes('c', -100) // true
arr.includes('a', -2)   // false



    //
    // Example 3
    // 



    (function () {
        console.log(Array.prototype.includes.call(arguments, 'a'))  // true
        console.log(Array.prototype.includes.call(arguments, 'd'))  // false
    })('a', 'b', 'c')