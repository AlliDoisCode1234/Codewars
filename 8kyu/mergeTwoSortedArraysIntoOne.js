function mergeArrays(arr1, arr2) {
    // given two sorted arrays
    // return array of joined sorted arrays
  
    // join to the arrays
    // joinedArrays the arrays concat
  
   // sort the newly joined array
   // delete any duplicates
     
  
//     if(arr1.length === 0 && arr2.length > 0) {
//     return arr2
//   } else if (arr1.length > 0 && arr2.length === 0) {
//     return arr1
//   } else if (arr1.length === 0 && arr2.length === 0) {
//     return []
//   }
    
//   // O(n) 
//   let joinedArrays = arr1.concat(arr2)
  
//   console.log(joinedArrays)
  
//  // 
//   let sortedJoinedArray = joinedArrays.sort((a,b) => a - b)
  
//   console.log(sortedJoinedArray)
  
//   return [...new Set(sortedJoinedArray)]
//   // loops through iterable
//   // creates object of new recurrences
//   // spread operator, turn this new set object into array
  
   // O(n) time | O(n) space - where n is the length of the array

  return [...new Set(arr1.concat(arr2))].sort((a,b) => a - b)
 
}