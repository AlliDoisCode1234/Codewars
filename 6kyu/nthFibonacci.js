// O(2^n) time | O(n) space
// const nthFibo = n => {
//   if (n === 1) {
//     return 0
//   } else if (n === 2) {
//     return 1
//   } else {
//     return nthFibo(n-1) + nthFibo(n-2)
//   }  
// }


// O(n) time | O(n) space

// const nthFibo = (n, memoize={1:0, 2: 1}) => {
//   if(n in memoize){
//     return memoize[n]
//   } else {
//     memoize[n] = nthFibo(n-1, memoize) + nthFibo(n-2, memoize);
//     return memoize[n]
//   }
  
// }

// O(n) time | O(1) space
const nthFibo = n => {
    let first = 0,
        second = 1,
        counter = 3;
    
    while(counter <= n) {
      const next = first + second;
      first = second;
      second = next;
      counter++
    }
    
    return n > 1 ? second : first;
  }
  