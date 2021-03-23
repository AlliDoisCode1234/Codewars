// O(n) time | O(1) space

function isPalindrome(x) {
  
    let leftIdx = 0;
    let rightIdx = x.length -1
    
    while(leftIdx < rightIdx) {
      if (x[leftIdx].toLowerCase() !== x[rightIdx].toLowerCase()) return false;
      leftIdx++;
      rightIdx--;
    }
    return true
  }