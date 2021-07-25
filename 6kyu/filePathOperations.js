class FileMaster {
    constructor(filepath) {
      const lastSlash = filepath.lastIndexOf('/') + 1
      const lastDot = filepath.lastIndexOf('.')
      this.extension = () => filepath.substring(lastDot + 1)
      this.filename = () => filepath.substring(lastSlash, lastDot)
      this.dirpath = () => filepath.substring(0, lastSlash)
    } 
}

class FileMaster {
    constructor(filepath) {
        const lastSlash = filepath.lastIndexOf('/') + 1
        const lastDot = filepath.lastIndexOf('.')
        this.extension = () => filepath.substring(lastDot + 1)
        this.filename = () => filepath.substring(lastSlash, lastDot)
        this.dirpath = () => filepath.substring(0, lastSlash)
    }
}



class FileMaster {
    constructor(filepath) {
      const lastSlash = filepath.lastIndexOf('/') + 1
      const lastDot = filepath.lastIndexOf('.')
      this.extension = () => filepath.substring(lastDot + 1)
      this.filename = () => filepath.substring(lastSlash, lastDot)
      this.dirpath = () => filepath.substring(0, lastSlash)
    } 
}






// EXAMPLE: 
// const fm = new FileMaster('/Users/person1/Pictures/house.png');
// fm.extension(); // output: 'png'
// fm.filename(); // output: 'house'
// fm.dirpath(); // output: '/Users/person1/Pictures/'







// class FileMaster {
//     constructor(filepath) {
//       this.path = filepath
//     }
    
//      extension() {
//       return this.path.match(/\.(.+$)/)[1];
//     }
  
//     filename() {
//       return this.path.match(/\/(\w+)\./)[1];
//     }
  
//     dirpath() {
//       return this.path.match(/^\/?.+\//);
//     }
//   }