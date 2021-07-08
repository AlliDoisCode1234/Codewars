function solve(arr) {
  
    // P: array of arrays
    // R: number of unique arrays
    
    // E: [[1,2], [4], [5,6]]
    // possibilities: [1,4,5], [1,4,6], [2,4,5], [2,4,6]
    // answer is 4
    
    // [[3,4,5], [6,7,8], [1,2,9], [10, 11]]
    // possibilities: [3,6,1,10], [3,6,1,11], [3,]...
    // answer is 54
    
    // P: 
    // iterate through each array in the array
    // remove first number of each element array
    // push it into a new set
    // and keep pushing unique sets
   
    return arr.reduce((a, c) => a *= new Set(c).size, 1);
    
  };