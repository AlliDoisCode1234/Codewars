function sumArray(array) {
    if (!Array.isArray(array)) return 0
   return array
       .sort((a, b) => a - b)
       .slice(1, array.length - 1)
       .reduce((a, b) => a + b, 0)
   }