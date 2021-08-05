function absentVowel(x){
    let charFreq ={
      'a': 0,
      'e': 0,
      'i': 0,
      'o': 0,
      'u': 0
    }
    
    let check = x.split('').map(el => {if(el.toLowerCase() in charFreq ){
      charFreq[el] += 1
    }})
    
    for (const [key, value] of Object.entries(charFreq)){
      if(value === 0){
        if(key === 'a'){
          return 0
        } else if( key === 'e'){
          return 1
        } else if(key === 'i'){
          return 2
        } else if(key === 'o'){
          return 3
        } else {
          return 4
        }
      }
    }
  }