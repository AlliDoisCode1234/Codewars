// Create running sum of 1d array
// create variable to store result in a new array
// create variable to track the running sum as the for loop iterates between each value
// create variable for current value of i
// add current sum with current value
// push current sum to the result array
// return result

const runningSum = (nums) => {
  let result = new Array();
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentValue = nums[i];

    currentSum += currentValue;
    result.push(currentSum);
  }

  return result;
};

// Testcase
// [1,2,3,4]
