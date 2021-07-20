function duplicateEncode(word){
    //    P: string
    //    R: string
    //    E: ( if once
    //        ) if more than once
    //    P: toLowerCase then split 
    //    map array and test current element index and last index of el
    // then join back to string
       return word
        .toLowerCase()
        .split("")
        .map((el, idx, arr) =>{
          return arr.indexOf(el) == arr.lastIndexOf(el) ? "(" : ")";
        })
        .join("");
     
    }
    