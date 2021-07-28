function sortArray(array) {
    //   P: array of numbers
    //   R: odd number sorted array
    //   E: [7, 1]  =>  [1, 7]
    // [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
    // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
    //   P:
    //   1. if array is shorter than length 2 return array
    //   2. two pointer - one at the first index and the second iterating through the length of the array
    //   3. if the first element in the array isn't odd, iterate the second pointer and put the first odd number there.
    //   4. then iterate the second pointer to the next odd number
    //   5. if that odd number is greater than the odd number at the first pointer
    //   6. swap the first pointer and the second pointer element
    //   let first = 0;
      
    //   if(array.length < 2){
    //     return array
    //   } else {
    //     for (let second = 0; second < array.length; second++){
    //       if(array[second] % 2 !== 0){
    //         if(array[first] % 2 !== 0 ){
    //           if(array[first] > array[second]){
    //             let temp = array[first];
    //             array[first] = array[second]
    //             array[second] = temp;
    //           }
    //         } else{
    //           second++
    //         }
    //       }
    //     }
    //   return array;
    //   }
      const odd = array.filter(x => x % 2).sort((a, b) => a - b);
      return array.map(x => (x % 2 ? odd.shift() : x));
    }
    