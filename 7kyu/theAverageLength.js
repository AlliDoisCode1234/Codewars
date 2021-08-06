// function averageLength(a) { 
//     let count = 0;
    
//     a.forEach(el => {count+= el.length})
  
//     return a.map((el, idx, arr) => {
//       return el[0].repeat(Math.round(count / a.length))
//     })
    
//  }

    function averageLength(arr) {
        const c = Math.round(arr.join('').length/arr.length)
        return arr.map(e=>e[0].repeat(c))
      }