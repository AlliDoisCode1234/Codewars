// function high(x){
// //   P: string
// //   R: string of word with highest score ( if same score, return earliest appearance in the original string)
// //   E: "am I a zoo" => 'zoo' (26 + 15 + 15 = 56)  
// //   "I am very cool" => 'very' (22 + 5 + 18 + 25 = 70)
// //   "aa b" = 'aa' because it comes first in the original string
// //   P: 
//   // split string into words
//   // turn word into sum or word
//   // get the math max of all elements
//   // if duplicate, take earlier word
  
//   let word = x.split(' ').map(x => [...x].reduce((a, b) => a + b.charCodeAt(0) - 96, 0))
//   console.log(word)
  
//   return x.split(' ')[word.indexOf(Math.max(...word))]
// }

const high = str => {

    let word = str.split(' ').map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0)) 
    return str.split(' ')[word.indexOf(Math.max(...word))]
  }