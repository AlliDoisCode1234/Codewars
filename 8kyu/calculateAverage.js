// Problem:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0


function find_average(array) {
    // add each el
    // divide by sum 
     let leg = array.length; 
    
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue)
    
    return sum/leg
    
    
      
  }
  
  //   let sum = 0;
  //   let leg = array.length
  
  //   if(array.length < 0 ){
  //     return 0;
  //   }else {
  //     array.forEach((el) => sum += el )
  //     return sum/leg
  //   }

  
//   Testcase:
//   Test.assertEquals(find_average([1,1,1]), 1);
// Test.assertEquals(find_average([1,2,3]), 2);