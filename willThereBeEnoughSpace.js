function enough(cap, on, wait) {
    return (wait + on) <= cap ? 0 : (wait + on) - cap
  }
  
  
  //   if((wait + on ) <= cap){
  //     return 0
  //   } else{
  //     return (wait + on) - cap
  //   }
    
  
  // testcase
  // describe('Example Tests', function(){
  //   Test.assertEquals(enough(10, 5, 5), 0);
  //   Test.assertEquals(enough(100, 60, 50), 10);
  //   Test.assertEquals(enough(20, 5, 5), 0);
  // });