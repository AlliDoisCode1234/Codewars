function firstToLast(str,c){
    //   P: string and char
    //   R: distance between first position char and last position char
      
    //   P: 
      // if more than one char, return pos int of distance
      // if only one char in string, return 0
      // if no char in string, return -1
      
    //   if(!str.includes(c)){
    //     return -1
    //   } else {
    //     let hashMap = str.split('').reduce((a,b) => ((a[b] = a[b] + 1 || 1), a), {});
    //     console.log(hashMap)
    //     for(const char in hashMap) {
    //       if(char == c && hashMap[char] > 1){
    //         console.log()
    //         return str.lastIndexOf(c) - str.indexOf(c)
    //       } else {
    //         return 0
    //       }
    //     }
    //   }
        let first = str.indexOf(c),
            last = str.lastIndexOf(c),
            length = last-first;
    
        return str.includes(c) ? length : str.indexOf(c);
        
      
    }
    