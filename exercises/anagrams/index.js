// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanString(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

function anagrams(stringA, stringB) {
    const strA = cleanString(stringA);
    const strB = cleanString(stringB);
    return strA === strB;
}

module.exports = anagrams;

// SOLUTION 1
// function cleanString(str) {
//     return str.replace(/[^\w]/g, '').toLowerCase();
// }
// function mapBuilder(str) {
//     const newObj = {};
//     for (let char of str) {
//         !newObj[char] ? (newObj[char] = 1) : newObj[char]++;
//     }
//     return newObj;
// }

// function anagrams(stringA, stringB) {
//     const strA = cleanString(stringA);
//     const strB = cleanString(stringB);
//     if (strA.length !== strB.length) return false;
//     const mapA = mapBuilder(strA);
//     const mapB = mapBuilder(strB);
//     console.log(mapA);
//     console.log(mapB);
//     for (let char in mapA) {
//         if (mapA[char] !== mapB[char]) return false;
//     }
//     return true;
// }
//SOLUTION 2
// function cleanStr(str) {
//     return str
//         .replace(/[^\w]/g, '')
//         .toLowerCase()
//         .split('')
//         .sort()
//         .join();
// }
// return cleanStr(stringA) === cleanStr(stringB);

//SOLUTION 3
// const strA = cleanString(stringA);
//     const strB = cleanString(stringB);
//     if (strA.length !== strB.length) return false;
//     for (let char of strA) {
//         if (!strB.includes(char)) return false;
//     }
//     return true;
