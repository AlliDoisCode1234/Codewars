Array.prototype.every()

// The every() method tests whether all 
// elements in the array pass the test 
// implemented by the provided function. 
// It returns a Boolean value.

//
// Example 1
//

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

//
// Example 2
//


function isBigEnough(element, index, array) {
    return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

//
// Example 3
//

[12, 5, 8, 130, 44].every(x => x >= 10);   // false
[12, 54, 18, 130, 44].every(x => x >= 10); // true