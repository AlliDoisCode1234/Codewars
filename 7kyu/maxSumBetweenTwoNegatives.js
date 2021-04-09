function maxSumBetweenTwoNegatives(a) {
    let negCount = 0;
    let sum = 0;
    let maxSum = 0;
    
    for (let num of a) {
      if (num < 0) {
        negCount++
        if (negCount > 1) {
          maxSum = Math.max(sum, maxSum)
          sum = 0
        }
      } else {
        if (negCount > 0) {
          sum += num
        }
      }
    }
    
    
    return negCount > 1 ? maxSum : -1
  }