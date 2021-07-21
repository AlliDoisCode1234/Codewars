function twoSum(arr, target) {
  const nums = {}
  for(let i = 0; i<arr.length; i++){
    console.log(`Loop ${i+1}`)
    console.log('i = ', i, 'arr[i] = ', arr[i])
    // i = 0, arr[i] = 2
    // difference = 9-2 = 7
    let difference = target - arr[i]
    console.log('difference = ', difference)
    // 7 does not exist in nums false
    if(typeof nums[difference] === 'number'){
      return [nums[difference], i]
    }
    // nums = {2:0}
    nums[arr[i]] = i
    console.log('nums = ', nums, '\n')
  }
}


// function twoSum(numbers, target) {
//     for (let i = 0; i < numbers.length; i++) {
//       for (let j = i + 1; j < numbers.length; j++) {
//         if (numbers[i] + numbers[j] === target) return [i, j];
//       }
//     }
//   }
