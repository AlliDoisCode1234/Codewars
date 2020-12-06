
  
  // given a string (s)
  // write function that return true
  // if it's a valid single int
  // or floating number
  // else false
  
  // if we parsefloat and it equals an int, then return true
  // else return false
  
  // how to check if a number is a number 
  
//   return true ? Number.isNaN(s) === true || Number(s) === undefined : true;
  
//   return true ? typeof s === 'number' : false; 
  
  
//   return true ? typeof str === "number" || isNaN(str) === false : false;
function isDigit(str) {
    if(str == ' ' || str == ""){
      return false
    } else if(typeof str === "number" || isNaN(str) === false){
      return true
    }else{
      return false
    }
  }