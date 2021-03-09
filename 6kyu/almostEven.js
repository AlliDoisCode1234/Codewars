// Problem:
// We need the ability to divide an unknown integer into a given number of even parts — or at least as even as they can be. The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.

// Example code:

// splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
// Complete the function so that it returns an array of integer representing the parts. Ignoring the order of the parts, there is only one valid solution for each input to your function!

// (Also, there is no reason to test for edge cases: the input to your function will always be valid for this kata.)

/**
 * Returns a [parts]-length array of equal or nearly equal
 * integers that add up to [num].
 */
var splitInteger = function(num, parts) {
  
    // divide int into given number of even parts
    // or at least as even as they can be
    // the sum of the parts should be the original value
    // but each part should be an integer
    // and they should be as close as possible
    
    // return array of integer representing the parts
    // ignoring the order of the parts
    // there is only one valid solution for each input 
    
    // There is no reason to test for edgecases
    // the input will always be valid
    
      // save the floor of the division of num and parts to n
      // create empty array
      // loop through array and push each n
      // if the addition of the array  is equal to num, return array
      // loop through the parts
      // inside loop check if sum of array is equal to num, return array
    
     let n = Math.floor(num/parts)
     let arr = []
     
     for(let i = 0; i < parts; i++){
       arr.push(n)
     }
    
    if(arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) === num) return arr;
    
    for(let i=0; i < parts; i++){
      arr[i]++
      if(arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) === num) return arr;
    }
    
       
    
    
  }


//   Testcase:
//   describe('Simple Functionality', function() {
//     it('should handle easy cases', function() {
//       Test.assertSimilar(splitInteger(10, 1).sort(), [10]);
//       Test.assertSimilar(splitInteger(2, 2).sort(), [1,1]);
//       Test.assertSimilar(splitInteger(20, 5).sort(), [4,4,4,4,4]);
//     });
//   });