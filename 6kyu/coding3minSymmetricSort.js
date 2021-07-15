const sc = arr => {
    let left =[]
    let right =[]
    arr=arr.sort((a,b)=>a-b)
    for (let i=0;i<arr.length;i++){
      if (i%2==0) left.push(arr[i])
      else right.push(arr[i])
    }
    right=right.sort((a,b)=>b-a)
    return left.concat(right)
  }

//   function sc(a) {
//     a = a.slice().sort((x,y) => x - y);
//     var left = a.filter((v,i) => i % 2 == 0);
//     var right = a.filter((v,i) => i % 2 == 1).reverse();
//     return left.concat(right);
//   }