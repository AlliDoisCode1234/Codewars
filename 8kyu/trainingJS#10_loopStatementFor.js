function pickIt(arr){
    let odd=[],even=[];
    for (let i =0; i < arr.length; i++){
      arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i])
  //     if(arr[i] % 2 === 0){
  //       even.push(arr[i])
  //     } else{
  //       odd.push(arr[i])
  //     }
    }
    
    
    return [odd,even];
  }