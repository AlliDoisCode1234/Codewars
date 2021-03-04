

  // What I want to do:
  // I want to check each value to see if it's an odd number
  // the first odd number I find 
  // I want to return it's index

  // iterate through array to check value of each index and return the first possible index
  // whose value is odd


function oddNum(arr) {
    
    const odd = e => e % 2 !== 0;
     if(arr.some(odd) !== true){
         return -1
        
       }
     
     for(let i = 0; i < arr.length; i++){
       
       if(arr[i] % 2 !== 0){
         return arr.indexOf(arr[i]);
         
       } 
     }
     
 }


 // Simple codegolf
//  function oddNum(numbers) {
//     return numbers.findIndex(n => n % 2 != 0);
//   }

// Second Simple codegolf
// const oddNum = a => a.findIndex(e => e % 2);
  
// Testcase
// Test.assertEquals(oddNum([2, 4, 6, 7, 10]), 3);
// Test.assertEquals(oddNum([12, 18, 24, 78, 13, 86, 28]), 4);