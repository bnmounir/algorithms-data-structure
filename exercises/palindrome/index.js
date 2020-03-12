// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    //SOL1
    // let revStr = str.split('').reduce((acc, nex) => nex + acc, '');
    // return revStr === str;
    //SOL2
    // let arr = str.split('');
    // return arr.every((elem, i) => {
    //     return elem === arr[arr.length - i - 1];
    // });
    // sol 3
    // const revStr = str
    //     .split('')
    //     .reverse()
    //     .join('');
    // return str === revStr;
    //sol 4
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
}

module.exports = palindrome;
