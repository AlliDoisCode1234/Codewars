function longestSlideDown (pyramid) {
    // given graph
    // return max sum
    // for each branch add sum,
    // keep track of current sum
    // and sum each branch 
    // then return max sum of all branches
    
    return pyramid.reduceRight((accumulator, currentValue) => currentValue.map((x, y) => x + Math.max(accumulator[y], accumulator[y + 1])))[0];
  }