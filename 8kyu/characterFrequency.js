const charFreq = message => 
  message
    .split('')
    .reduce((obj, el) => ((obj[el] = obj[el] + 1 || 1), obj), {})