Array.prototype.forEach()

// O(n) time | space

// The forEach() method executes a provided 
// function once for each array element.


// 
// Example 1
//

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

// 
// Example 2
//

let ratings = [5, 4, 5];
let sum = 0;

let sumFunction = async function (a, b) {
    return a + b
}

ratings.forEach(async function (rating) {
    sum = await sumFunction(sum, rating)
})

console.log(sum)
// Naively expected output: 14
// Actual output: 0

// 
// Example 3
//


const items = ['item1', 'item2', 'item3']
const copyItems = []

// before
for (let i = 0; i < items.length; i++) {
    copyItems.push(items[i])
}

// after
items.forEach(function (item) {
    copyItems.push(item)
})