function solution(a, b) {
  // return a string of the form (short+long+short)
  // with the shorter string on the outside and the longer string on the inside
  // strings !== same length
  // but they may be empty (length[0]).

  // value and index
  // compare length
  // concatonate short then long then short into new string

  if (a.length < b.length) {
    return a.concat("", b, a);
  } else {
    return b.concat("", a, b);
  }
}

//   testcase
//   describe("Sample tests", function() {
//     it("Should pass sample tests", function() {
//       Test.assertEquals(solution('45', '1'), '1451');
//       Test.assertEquals(solution('13', '200'), '1320013');
//       Test.assertEquals(solution('Soon', 'Me'), 'MeSoonMe');
//       Test.assertEquals(solution('U', 'False'), 'UFalseU');
//     });
//   });
