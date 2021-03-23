// O(n) time | O(1) space


const isPalindrome(line) {
  
    let leftIdx = 0;
    let rightIdx = line.length - 1;
    
    while (leftIdx < rightIdx) {
      if(line[leftIdx] !== line[rightIdx]) return false;
      leftIdx++;
      rightIdx--;
    }
    return true
  }