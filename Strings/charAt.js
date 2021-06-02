String.prototype.charAt()

// The String object's charAt() method returns a 
// new string consisting of the single UTF-16 code 
// unit located at the specified offset into the string.

// 
// Example 1
// 

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"


// 
// Example 2
// 

var anyString = 'Brave new world';
console.log("The character at index 0   is '" + anyString.charAt() + "'");
// No index was provided, used 0 as default

console.log("The character at index 0   is '" + anyString.charAt(0) + "'");
console.log("The character at index 1   is '" + anyString.charAt(1) + "'");
console.log("The character at index 2   is '" + anyString.charAt(2) + "'");
console.log("The character at index 3   is '" + anyString.charAt(3) + "'");
console.log("The character at index 4   is '" + anyString.charAt(4) + "'");
console.log("The character at index 999 is '" + anyString.charAt(999) + "'");

// 
// Example 3
// 


function fixedCharAt(str, idx) {
    let ret = ''
    str += ''
    let end = str.length

    let surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
    while ((surrogatePairs.exec(str)) != null) {
        let lastIdx = surrogatePairs.lastIndex
        if (lastIdx - 2 < idx) {
            idx++
        } else {
            break
        }
    }

    if (idx >= end || idx < 0) {
        return ''
    }

    ret += str.charAt(idx)

    if (/[\uD800-\uDBFF]/.test(ret) && /[\uDC00-\uDFFF]/.test(str.charAt(idx + 1))) {
        // Go one further, since one of the "characters" is part of a surrogate pair
        ret += str.charAt(idx + 1)
    }
    return ret
}



