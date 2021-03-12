// Problem:
// This is a spin off of my first kata. You are given a list of character sequences as a comma separated string. Write a function which returns another string containing all the character sequences except the first and the last ones, separated by spaces. If the input string is empty, or the removal of the first and last items would cause the string to be empty, return a null value.

const array = arr => {

    // String = arr = list of charachter sequences
    // except the first and last one
    // separated by spaces
    // if the input string is empty or the removal of the first and last creates empty string
    // return null
    // else return remaining string
    return (
      arr
        .split(',')
        .slice(1, -1)
        .join(' ') || null
    
     );
  }  
    
// Testcase:
// Test.describe("Tests", function(){

//     Test.assertEquals(array(''), null);
//     Test.assertEquals(array('1'), null);
//     Test.assertEquals(array('1, 3'), null);
//     Test.assertEquals(array('1,2,3'), '2');
      
//     });