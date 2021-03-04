//Problem:
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


const countBits = n => {
    // takes in integer as an input
    // returns the number of bits that are equal to one in the binary representation of that number
    // can guarantee input is a non-negative
    
    // i.e 
    // binary representation of 1234 is 10011010010
    // so the function should return 5 in this case
    return n==0?0:(n&1)+countBits(n>>1)
    
   };
    

// Testcase:
// Test.assertEquals(countBits(0), 0);
// Test.assertEquals(countBits(4), 1);
// Test.assertEquals(countBits(7), 3);
// Test.assertEquals(countBits(9), 2);
// Test.assertEquals(countBits(10), 2);