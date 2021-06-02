String.prototype.charCodeAt()

// The charCodeAt() method returns an integer between 
// 0 and 65535 representing the UTF-16 code unit at 
// the given index.


// 
// Example 1
// 

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code 113 is equal to q"


// 
// Example 2
// 

'ABC'.charCodeAt(0)  // returns 65

// 
// Example 3
// 

function knownCharCodeAt(str, idx) {
    str += '';
    var code,
        end = str.length;

    var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    while ((surrogatePairs.exec(str)) != null) {
        var li = surrogatePairs.lastIndex;
        if (li - 2 < idx) {
            idx++;
        }
        else {
            break;
        }
    }

    if (idx >= end || idx < 0) {
        return NaN;
    }

    code = str.charCodeAt(idx);

    var hi, low;
    if (0xD800 <= code && code <= 0xDBFF) {
        hi = code;
        low = str.charCodeAt(idx + 1);
        // Go one further, since one of the "characters"
        // is part of a surrogate pair
        return ((hi - 0xD800) * 0x400) +
            (low - 0xDC00) + 0x10000;
    }
    return code;
}