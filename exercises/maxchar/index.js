// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const dict = {}
    let result = null

    for (let char of str) {
        // dict[char] = dict[char] + 1 || 1 -- provided example solution
        if (!dict[char]) {
            dict[char] = 1
        } else {
            dict[char] = dict[char] + 1
        }
    }

    for(let key in dict) {
        if(!result) {
            result = key
        } else {
            if (dict[key] > dict[result]) {
                result = key
            }
        }
    }

    return result 
}

module.exports = maxChar;
