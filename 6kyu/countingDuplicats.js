function duplicateCount(text){
    // if string is empty, return 0
    // if no dupe return 0
    
    //STEPS:
    // turn string to lowercase
    // split string to arr
    // map through arr
    // if el equals next element and el is not in trash array increase count and push element to trash array
    // return count
    
  
    let count = 0;
    let trash = []
    text
        .toLowerCase()
        .split("")
        .sort()
        .map((el, idx, arr) => {
          if (el === arr[idx + 1] && !trash.includes(el)) {
            trash.push(el)
            count++
          }
        })
    return count    
  }