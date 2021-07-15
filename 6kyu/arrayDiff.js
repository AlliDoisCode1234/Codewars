//   P: two params each an array of numbers
//   R: return both arrays in order without duplicate elements
//   E: [1,2,3,4,5,5], [2,4,5,6,7] => [1,3], [6,7]
//   E: [2,2,3], [3,4] => [2,2], [4]
//   E: [4,5,6,7,7,7], [3,3,3,4,5,6] => [7,7,7], [3,3,3]
//   P: filter through a, only keep el if it it's included in second array
  

const arrayDiff = (a, b) => a.filter(e => !b.includes(e));
  
