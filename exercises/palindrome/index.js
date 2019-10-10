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
    let arr = str.split('');
    return arr.every((elem, i) => {
        return elem === arr[arr.length - i - 1];
    });
}

module.exports = palindrome;
