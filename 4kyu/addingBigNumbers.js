// Problem:
// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives



function add(a, b) {
    let ans = "";
  
    if (a.length > b.length ) {
      let zeroLength = a.length - b.length;
  
      for (let i=0; i < zeroLength; i++) {
        b = "0" + b;
      }
    }
  
    if (a.length < b.length ) {
      let zeroLength = b.length - a.length;
  
      for (let i=0; i < zeroLength; i++) {
        a = "0" + a;
      }
    }
  
    let step = [];
    if (a.length === b.length) {
      for (let i = a.length-1; i >= 0; i--) {
        let numberA = Number(a[i]);
        let numberB = Number(b[i]);
        let addResult = 0;
        if (step[i+1]) {
          addResult = step[i+1] + numberA + numberB;
        } else {
          addResult = numberA + numberB;
        }
        if (addResult >= 10 && i !== 0) {
          ans = String(addResult - 10) + ans;
          step[i] = 1;
        } else {
          ans = String(addResult) + ans;
        }
      }
    }
  
    return ans;
  }
  

// Testcase:
// describe("Add two numbers", function(){
//     it("should pass basic tests", function() {
//       Test.assertEquals(add("1", "1"), "2");
//       Test.assertEquals(add("123", "456"), "579");
//       Test.assertEquals(add("888", "222"), "1110");
//       Test.assertEquals(add("1372", "69"), "1441");
//       Test.assertEquals(add("12", "456"), "468");
//       Test.assertEquals(add("101", "100"), "201");
//       Test.assertEquals(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
//     });
//   });