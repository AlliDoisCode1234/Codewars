// function arr(N) {
//   let filledArr = [];
//   if (typeof N === "number") {
//     filledArr.push(0);
//     for (i = 1; i < N; i++) {
//       filledArr.push(filledArr[i - 1] + 1);
//     }
//   }
//   return filledArr;
// }

// console.log(arr(4));
// console.log(arr(5));
// console.log(arr());

// Better Solution:

const arr = (n) => Array.from({ length: n }, (_, i) => i);

// Testcase
// describe('#arr creates a new array with the numbers 0 to N-1',_=>{
//     it('should return an array',_=>Test.expect(arr() instanceof Array));
//     it('should return a blank array when called with no argument',_=>Test.assertSimilar(arr(), []));
//     it('should return 0 to 3 when called with 4',_=>Test.assertSimilar(arr(4), [0,1,2,3]));
//   });
