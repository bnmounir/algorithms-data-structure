// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // let strA = stringA.replace(/[^\w]/g, '').toLowerCase();
    // let strB = stringB.replace(/[^\w]/g, '').toLowerCase();
    // if (strA.length !== strB.length) return false;
    // const objA = {};
    // const objB = {};
    // for (let char of strA) {
    //     objA[char] ? objA[char]++ : (objA[char] = 1);
    // }
    // for (let char of strB) {
    //     objB[char] ? objB[char]++ : (objB[char] = 1);
    // }
    // SOLUTION 1
    // function buildCharMap(str) {
    //     const charMap = {};
    //     let cleanedStr = str.replace(/[^\w]/g, '').toLowerCase();
    //     for (let char of cleanedStr) {
    //         charMap[char] = charMap[char] + 1 || 1;
    //     }
    //     return charMap;
    // }
    // const objMapA = buildCharMap(stringA);
    // const objMapB = buildCharMap(stringB);
    // if (Object.keys(objMapA).length !== Object.keys(objMapB).length)
    //     return false;
    // for (let char in objMapA) {
    //     if (objMapA[char] !== objMapB[char]) return false;
    // }
    // return true;
    //SOLUTION 2
    function cleanStr(str) {
        return str
            .replace(/[^\w]/g, '')
            .toLowerCase()
            .split('')
            .sort()
            .join();
    }
    return cleanStr(stringA) === cleanStr(stringB);
}

module.exports = anagrams;
