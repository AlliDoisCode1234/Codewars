  // Instructions:
  
  // given an array of unique elements, 
  // rearrange the values so that
  // they alternate most max value, most min value, until no more elements
  
  
  // Thought Process # 1
  
  // Create new array to store results
  // sort current array from min to max
  // push max from end of array to results array
  // push min from beginning of array to results array
  // until no more elements in current array 
  // return results array
  // CONS: Shift()'s Time Complexity => T(n - 1)
  
  
  
  // Thought Process # 2
  
  // create empty array for results
  // sort min to max
  // iterate through array with forloop to find Math.max
  // push max int to results array
  // iterate through array to find Math.min
  // push min int to results array
  // loop until lenght of array == 0
  
  
  // *** Thought Process #1 WORKS!!! with shift() -> O(n -1)***

// function solve(arr){
//   let result = [];
//   let trash = [];
//   let order = arr.sort((a, b) => a - b);
  

//     while(order.length >= 1){
//       result.push(order.pop()) 
//       result.push(order.shift())
      
//     }
  
//   if(result[result.length-1] == undefined){
//     result.pop();
//   }
  
//     return result;
// }
 

// *** END ***

  
  // *** Thought Process #2 DOES NOT WORK ***
  
//   let results = [];
//   let order = arr.sort((a, b) => a - b);
  
//   for(let i=0; order.length >=1; i++){
//     if(i = Math.max(...arr)){
//       results.push(i)
//     }else if(i = Math.min(...arr)){
//       results.push(i)
//     }
//   }
  
//   return results;
// }

// *** END *** 


 
// Additional Thoughts

// function solve(arr){
//   let result = [];
  
 
//   do {
//     result.push(arr.pop(Math.max(...arr)));
//     result.push(arr.pop(Math.min(...arr))); 
//   } while (arr.length >= 1);
  
//  return result;
 
  
// }


// BEST SOLUTION - without shift() -> O(n -1)
 
function solve(arr){
  
    let resultArray = []; // T(4) O(1)
    let sortedIndexedCollection = arr.sort((a, b) => a - b); //Quicksort 
    let leftCursor = 0;
    let numberOfTimesToRun = undefined;
  
      numberOfTimesToRun = ~~ sortedIndexedCollection.length / 2;
    
    for(let index in sortedIndexedCollection){
      
        resultArray.push(sortedIndexedCollection.pop())
        resultArray.push(sortedIndexedCollection[leftCursor])
  
        leftCursor++;
      
      
      if(index === numberOfTimesToRun - 1){
        break;
      }
      
    }
    if(resultArray[resultArray.length-1] == undefined){
      resultArray.pop();
    }
   
    
  
    
    return resultArray;
    
  }
  