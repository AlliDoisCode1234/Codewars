function twiceAsOld(dadYearsOld, sonYearsOld) {
  
    // current dad's age = number
    // current son's age = number
    
    // calc how many years ago the father was twice as old as son
    // or in how many years will he be twice as old
    
    // father's age = 36
    // son's age = 7
    // expected return is 22
    // son would be 29
    // father would be 58
    
    // father's age + x / son's age + x === 2
    
   
  //   let decrementalAnswer = 0;
  //   let incrementalAnswer = 0;
  //   let isDoubleAge = dadYearsOld/sonYearsOld === 2
    
  //   if (dadYearsOld/sonYearsOld===2) return 0
  //     if (sonYearsOld*2!==dadYearsOld){
  //       return Math.abs(dadYearsOld-sonYearsOld*2) 
  //     }
    
    //   21 into 2 = 42
    //   42 - 42 = 0
    
    return Math.abs(dadYearsOld - 2 * sonYearsOld)
    
  
    
  }