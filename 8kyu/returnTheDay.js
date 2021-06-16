// O(n) time | O(1) space

const whatday = num => { 

    // P: number
    // R: String
    // E: 1, "Sunday"
    //   2, "Monday"
    // Not between 1-7, "Wrong, please enter a number..."
    // P: 
    // Steps to Acheive Solution
    
    // 1. Check input number if it is a number and between 1-7
    // 2. If it is a number and between 1-7, map it to the return string
    // 3. Else, return default string "wrong, please enter"
    // 4. Done
    
    switch(num) {
        case 1:
          return "Sunday"
        case 2: 
          return "Monday"
        case 3:
          return "Tuesday"
        case 4:
          return "Wednesday"
        case 5: 
          return "Thursday"
        case 6:
          return "Friday"
        case 7:
          return "Saturday"
        default: 
          return "Wrong, please enter a number between 1 and 7"
    }
    
  }