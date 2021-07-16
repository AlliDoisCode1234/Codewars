function count (s) {  
    //   P: string
    //   R: object
    //   E: 'aba' => { a: 2, b: 1}
    //   E: 'abba' => { a: 2, b: 2}
    //   E: 'further' => { f: 1, u: 1, r: 2, t: 1, h: 1, e: 1}
    //   P: split string intro array
    //   map through array
    //   in the map, put conditional logic that tests if the element is already in the object
    //   if it is, then increase the value frequency by 1
    //   if it is not, add it to the object with a value frequency of 1
    //   return object
      let obj = {}
      s.split('').map((el, idx, arr) => {
        el in obj ? obj[arr[idx]] += 1 : obj[arr[idx]] = 1
      })
      return obj
    }