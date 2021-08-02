// function findDeletedNumber(arr, mixArr) {
//     let sorted = mixArr.sort((a,b) => a - b)
//     if(sorted.length === arr.length && sorted.every((val, idx) => val === arr[idx])) {
//       return 0
//     } else {
//       for (let i = 0; i <= sorted.length; i++) {
//         if(sorted[i] !== (i + 1)){
//           return (i + 1)
//         }
//       }
//     }
//   }

const findDeletedNumber = (arr, mixArr) => arr.filter(el=> mixArr.indexOf(el) == -1)[0] || 0