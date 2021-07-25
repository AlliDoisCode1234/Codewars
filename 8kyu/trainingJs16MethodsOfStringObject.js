const cutIt = arr => {
    const minLength = Math.min(...arr.map(el => el.length));
    return arr.map(el => el.slice(0, minLength))
}




// function cutIt(arr){
  
                       
//     let newArr = arr.map(el => el.length)
    
//    let shortest = Math.min(...newArr);
      
//     return arr.map(el => el.slice(0, shortest))
  
    
//   }