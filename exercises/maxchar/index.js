// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const counterObj = {};
    let max = 0;
    let keyStr = '';
    for (let char of str) {
        counterObj[char] ? counterObj[char]++ : (counterObj[char] = 1);
    }
    for (let high in counterObj) {
        counterObj[high] >= max
            ? (max = counterObj[high]) && (keyStr = high)
            : max;
    }
    // for (let [key, value] of Object.entries(counterObj)) {
    //     if (value === max) {
    //         keyStr = key;
    //     }
    // }
    return keyStr;
}

module.exports = maxChar;
