const gimme = inputArray => {
    let one = inputArray[0]
    let two = inputArray[1]
    let three = inputArray[2]
    
    if(one > two && one < three || one > three && one < two){
      return 0
    } else if( two > one && two < three || two > three && two < one) {
      return 1
    } else {
      return 2
    }
      
  };