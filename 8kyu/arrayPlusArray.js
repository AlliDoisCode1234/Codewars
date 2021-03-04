

// function arrayPlusArray(arr1, arr2) {

  
//   let sum1 = arr1.reduce((a, b) => a + b)
  
//   let sum2 = arr2.reduce((c, d) => c + d)
  
//   return sum1 + sum2;
  
// }



function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b)
    
    }

//BOTH SOLUTIONS ABOVE WORK 


    // Testcase:
    // Test.describe("Basic tests",function(){
    //     Test.assertEquals(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
    //     Test.assertEquals(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
    //     Test.assertEquals(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
    //     Test.assertEquals(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
    //   })