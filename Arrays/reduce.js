Array.prototype.reduce()

// The reduce() method executes a reducer function 
// (that you provide) on each element of the array, 
// resulting in a single output value.

//
// Example 1
// 

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15



//
// Example 2
// 


let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    []
)
// flattened is [0, 1, 2, 3, 4, 5]


//
// Example 3
// 

let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++
    }
    else {
        allNames[name] = 1
    }
    return allNames
}, {})
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }