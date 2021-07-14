function repeats(arr){
    // P: array of numbers with two numbers have duplicates
    // R: sum of two numbers that have duplicates
    // E: [1,2,2,3,3,4] = 2+3 = 5
    // P: Iterate through the array
      // push every element into a frequency hashmap
      // if frequency in hashmap ever reaches 2, 
      // resultVariable += element with 2 frequency
      // return resultVariable
    //   let numFrequency = {},
    //       sum = 0,
    //       windowStart = 0;
      
    //   for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
    //     const numRight = arr[windowEnd]
    //     if (!(numRight in numFrequency)){
    //       numFrequency[numRight] = 0;
    //     }
    //     while(numFrequency <= 1){
    //       numFrequency[numRight] += 1 
    //     }
    //     const numLeft = arr[windowStart]
    //     if(numFrequency[numRight] == 2){      
    //       sum += numFrequency[numLeft]
    //     }
    //     windowStart += 1;
    //   }
    //   return sum;
      let counts = arr.reduce((acc, el) => {
            !acc[el] ? acc[el] = +1 : acc[el] += 1;
            return acc;
        }, {});
        let sum = 0;
        for (let key in counts) {
            if (counts[key] == 1) {sum = sum + +key;}
        }
        return sum;
    };