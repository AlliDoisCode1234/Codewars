Array.prototype.shift()

// The shift() method removes the first element 
// from an array and returns that removed element. 
// This method changes the length of the array.


//
// Example 1
//

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1


//
// Example 2
//


var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before:', JSON.stringify(myFish));
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

var shifted = myFish.shift();

console.log('myFish after:', myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log('Removed this element:', shifted);
// Removed this element: angel


//
// Example 3
//

var names = ["Andrew", "Edward", "Paul", "Chris", "John"];

while (typeof (i = names.shift()) !== 'undefined') {
    console.log(i);
}
// Andrew, Edward, Paul, Chris, John