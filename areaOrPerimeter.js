const areaOrPerimeter = function (l, w) {
  // Return your answer

  // given length and width
  // either rectangle or square
  // if square return area
  // if rectangle return perimeter

  let rOne = l * w;
  let rTwo = l * 2 + w * 2;

  if (w === l) {
    return rOne;
  } else if (w !== l) {
    return rTwo;
  } else {
    return false;
  }
};

//   Testcase
//   Test.assertEquals(areaOrPerimeter(4 , 4) , 16);
//   Test.assertEquals(areaOrPerimeter(6 , 10) , 32);
