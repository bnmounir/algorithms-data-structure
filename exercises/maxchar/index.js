// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const strMap = {};
    for (let char of str) {
        !strMap[char] ? (strMap[char] = 1) : strMap[char]++;
    }
    let repeatedTimes = 0;
    let charRepeated = '';
    for (let char in strMap) {
        if (strMap[char] > repeatedTimes) {
            repeatedTimes = strMap[char];
            charRepeated = char;
        }
    }
    return charRepeated;
}

module.exports = maxChar;

// const counterObj = {};
// let max = 0;
// let keyStr = '';
// for (let char of str) {
//     counterObj[char] ? counterObj[char]++ : (counterObj[char] = 1);
// }
// for (let high in counterObj) {
//     counterObj[high] >= max
//         ? (max = counterObj[high]) && (keyStr = high)
//         : max;
// }
// for (let [key, value] of Object.entries(counterObj)) {
//     if (value === max) {
//         keyStr = key;
//     }
// }
// return keyStr;
