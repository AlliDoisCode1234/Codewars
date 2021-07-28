// function arraysSimilar(arr1, arr2) {
// //   P: Two separate arrays
// //   R: Boolean
// //   E: 
  
// //   P: Object.is() method to determine if objects are equal
  
// //   reduce into obj
// //   test equality
  
  
// //   const hashOne = arr1.reduce((a,b) => ((a[b] = a[b] + 1 || 1), a), {})
// //   const hashTwo = arr2.reduce((x,y) => ((x[y] = x[y] + 1 || 1), x), {})
  
// //   console.log(hashOne)
// //   console.log(hashTwo)
  
// //   return Object.is(hashOne, hashTwo)
  
// }

function arraysSimilar(arr1, arr2) {
    arr1 = arr1.sort((a, b) => a - b);
    arr2 = arr2.sort((a, b) => a - b);
    return arr1.length > arr2.length
      ? arr1.every((v, i) => v === arr2[i])
      : arr2.every((v, i) => v === arr1[i]);
  }