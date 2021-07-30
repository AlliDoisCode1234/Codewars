// const sortStringsByVowels = str => {

  
// //   P: array of strings
// //   R: sorted array of strings of continguous vowels
// //   E: 
  
// //   ['high', 'gooo', 'yes'] => ['gooo', 'high', 'yes']
// //   ['noobnooob', 'cat', 'dog'] => ['noobnooob', 'cat', 'dog']
  
// //   P: 
  
// //   - iterate through the array
// //   - for each element find longest contig substr
// //   - use map and change value of element to length of longest substr in each el
// //   - ...array.sort descending
// //   - if two elements have same length, input element in earlier index (grab the array and idx in map)
// //   - return original words in descen based on above logic
  
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let windowStart = 0;
//     let longestSubStr = 0;
//     let currentLongest = 0;
//     let subStrArr = [];
  
//   str.map((el, idx, arr) => {
    
//     // 0
//     // 2
    
    
//     ["h i g h","day","b o o t"]
    
//                             S
//                             E
            
//             [1,1, 2]
    
//     for (let windowEnd = 0; windowEnd < el.length; windowEnd++){
//       if(!vowels.includes(arr[windowEnd])){
//         windowStart = windowEnd
//         currentLongest = 0
        
//       } else {
//         currentLongest++
//         // 1
//         // 1
//         if(currentLongest > longestSubStr){
//           longestSubStr = currentLongest
//         }
        
//       }
//     }
//     subStrArr.push(longestSubStr)
//     longestSubStr = 0;
//     currentLongest = 0;
    
//   })
  
// //   let sorted = subStrArr.sort((a, b) => b - a || b);
  
//   // array of longestsubstring contig numbers
  
  
  

// }

function sortStringsByVowels(s){
    const len = (str) => (str.match(/[aiueoAIUEO]+/g) || []).reduce((v,c) => v = Math.max(v,c.length),0);
    return s.sort((a,b) => len(b) - len(a));
  }