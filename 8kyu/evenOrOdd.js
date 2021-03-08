// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


function even_or_odd(number) {
    return number%2!==0?"Odd":"Even"
}

// if(number%2===0){
//      return "Even"
//    }else{
//      return "Odd"
//    }

// if(number%2 !== 0){
//     return "Odd"
//   }else{
//     return "Even"
//   }

//  return number%2!==0?"Odd":"Even"


// Testcase:

// Test.assertEquals(even_or_odd(2), "Even")
// Test.assertEquals(even_or_odd(0), "Even")
// Test.assertEquals(even_or_odd(7), "Odd")
// Test.assertEquals(even_or_odd(1), "Odd")