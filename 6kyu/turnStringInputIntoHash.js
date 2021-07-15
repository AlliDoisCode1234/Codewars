const strToHash = str => {
    let result = {};
    
    if (str.length) {
      let items = str.split(', ')
  
      items.forEach(item => {
        const [key, val] = item.split("=")
        result[key] = +val
      })
    }
    return result
  }