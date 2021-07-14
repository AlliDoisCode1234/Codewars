const stringTransformer = str =>
//   P: str
//   R: string with each char inverse of its case
//   E: "hI" > "Hi"
//       "helLO" > "HELlo"
//       "wInNeR" > "WiNnEr"
//   P: split to array then map each el and switch case then join to return
    
    str
      .split('')
      .map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase())
      .join('')
      .split(' ')
      .reverse()
      .join(' ')