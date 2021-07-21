// function iqTest(numbers){
//   let result = 0;
//   let newArr = numbers.split(' ').map((el, idx, arr) => +el % 2 == 1 ? result+= (idx + 1) : null)
//   return result;
// }

function iqTest(numbers) {
    numbers = numbers.split(" ").map(function(el) {
      return +el;
    });
  
    let odd = numbers.filter(el =>
       el % 2 === 1)
    
    let even = numbers.filter(el =>
       el % 2 === 0)
  
  
    return odd.length < even.length
      ? numbers.indexOf(odd[0]) + 1
      : numbers.indexOf(even[0]) + 1;
  }