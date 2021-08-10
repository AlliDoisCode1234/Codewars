function reverseFizzBuzz(array) {
    let f,b;
    for (let i=0;i<array.length;i++){
      if (/Fizz/gi.test(array[i])&&!f) f=i+1
      if (/Buzz/gi.test(array[i])&&!b) b=i+1
      if (f&&b) return [f,b]
    }
  };