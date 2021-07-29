// // return the two oldest/oldest ages within the array of ages passed in.
// function twoOldestAges(ages){
//     let sorted = ages.sort((a,b) => a - b)
//     return [sorted[sorted.length - 2], sorted[sorted.length - 1]]
//   }
const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2)