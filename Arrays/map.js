Array.prototype.map()

// The map() method creates a new array populated 
// with the results of calling a provided function 
// on every element in the calling array.


//
// Example 1
//


const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


//
// Example 2
//


let numbers = [1, 4, 9]
let doubles = numbers.map(function (num) {
    return num * 2
})

// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]



//
// Example 3
//

let map = Array.prototype.map
let a = map.call('Hello World', function (x) {
    return x.charCodeAt(0)
})
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]