// Problem: 
// In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

// For example:

// solve("our code") = "edo cruo"
// -- Normal reversal without spaces is "edocruo". 
// -- However, there is a space at index 3, so the string becomes "edo cruo"

// solve("your code rocks") = "skco redo cruoy". 
// solve("codewars") = "srawedoc"
// More examples in the test cases. All input will be lower case letters and in some cases spaces.

// Good luck!

function solve(str){
    // recursion in a ternary conditional 
    return str ? solve(str.substr(1)) + str[0] : str
   }


//    Testcase:
//    describe("Basic tests", function(){
//     Test.assertEquals(solve("codewars"),"srawedoc");
//     Test.assertEquals(solve("your code"),"edoc ruoy");
//     Test.assertEquals(solve("your code rocks"),"skco redo cruoy");
//     Test.assertEquals(solve("i love codewars"),"s rawe docevoli");
//     });