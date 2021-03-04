// function findMultiples(integer, limit) {

// takes in value (integer)
// return list of it's multiples up to value (limit)
// if limit is a multple of integer it should be included
// only positive integers, not consisting of 0
// limit will always be higher than the base

function findMultiples(int, limit) {
  let temp = 0,
    result = [],
    mult = Math.floor(limit / int);
  for (let i = 0; i < mult; i++) {
    result.push((temp += int));
  }
  return result;
}

//   Testcase
//   Test.describe("Basic Tests",_=>{
//     Test.assertSimilar(findMultiples(5, 25), [5, 10, 15, 20, 25])
//     Test.assertSimilar(findMultiples(1, 2), [1, 2])
//     Test.assertSimilar(findMultiples(5, 7), [5])
//     Test.assertSimilar(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
//     Test.assertSimilar(findMultiples(11, 54), [11, 22, 33, 44])
//     });
