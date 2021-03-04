
function descendingOrder(n){
    return parseInt(String(n).split("").sort((a,b) => a - b).reverse().join(""));
      
   }





// Testcase
// Test.assertEquals(descendingOrder(0), 0)
// Test.assertEquals(descendingOrder(1), 1)
// Test.assertEquals(descendingOrder(123456789), 987654321)