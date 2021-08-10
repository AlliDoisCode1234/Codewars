const halvingSum = n => {
    let sum = 0;
    
    while (n > 0) {
      sum += n
      // 25
      //12
      //6
      //3
      //1
      n = Math.floor((n * 1) / 2)
    }
    return sum
  }
  