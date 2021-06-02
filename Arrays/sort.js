Array.prototype.sort()

// O(n log(n)) time | space

// The sort() method sorts the elements of an array 
// in place and returns the sorted array. The default 
// sort order is ascending, built upon converting the 
// elements into strings, then comparing their sequences 
// of UTF-16 code units values.

//
// Example 1
//

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]


//
// Example 2
//

let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// [1, 2, 3, 4, 5]


//
// Example 3
//

let numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]