//TODO : calculate the downwar rounded average of the marks array

// calc average of an array of numbers
// return average rounded down to it's nearest integer

// Add all integers in array
// Divide result by array.length
// Return result rounded down

//NOTE: array will never be empty

function getAverage(marks) {
  let total = 0;
  for (i = 0; i < marks.length; i++) {
    total += marks[i];
  }

  let mean = total / marks.length;

  let rMean = Math.floor(mean);

  return rMean;
}

// Testcase
// Test.assertEquals(getAverage([2,2,2,2]),2);
// Test.assertEquals(getAverage([1,2,3,4,5,]),3);
// Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);
