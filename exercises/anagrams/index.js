// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function createDict (string) {
//     const dict = {}

//     const cleanedWord = string.replace(/[^\w]/g, "").toLowerCase()
//     console.log(cleanedWord)

//     for(let char of cleanedWord) {
//         dict[char] = dict[char] + 1 || 1
//     }

//     return dict
// }

// function anagrams(stringA, stringB) {
//     const aDict = createDict(stringA)
//     const bDict = createDict(stringB)
//     let aKeys = Object.keys(aDict)
//     let bKeys = Object.keys(bDict)

//     if(aKeys.length !== bKeys.length) {
//         return false
//     }

//     for(let key in aDict) {
//         if(aDict[key] !== bDict[key]) {
//             return false
//         }
//     }

//     return true
// }

function cleanString(str) {
    return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

function anagrams(stringA, stringB) {
    const sortA = cleanString(stringA)
    const sortB = cleanString(stringB)

    return sortA === sortB
}

module.exports = anagrams;
