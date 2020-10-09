// function isInMiddle(seq) {

//     // To define CENTER,
//     // the number of characters in the sequence to the left and right of the "abc"
//     // (which is in the middle) must differ by at most one.

//     // return true if center
//     // else false
//     const word = 'abc';
//     const indexBef = seq.indexOf(word);
//     const indexBRes = indexBef + 1;
//     const indexAft = seq.length - indexBef - 3;

//   //   console.log(indexF);

//     if(indexBRes % indexAft <= 1){
//       return true
//     } else{
//       return false
//     }
//   }

const isInMiddle = (str) =>
  str.length <= 4 ? str.includes("abc") : isInMiddle(str.slice(1, -1));
