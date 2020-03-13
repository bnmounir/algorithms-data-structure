// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    str.toLowerCase()
        .split('')
        .map(char => {
            vowels.includes(char) ? (count += 1) : count;
        });
    return count;
}

module.exports = vowels;

// SOL 1
// function vowels(str) {
//     let count = 0;
//     let vowels = 'aeiou';
//     str.toLowerCase()
//         .split('')
//         .map(char => {
//             vowels.includes(char) ? (count += 1) : count;
//         });
//     return count;
// }

// SOL 2
// function vowels(str) {
//     let count = 0;
//     let vowels = 'aAeEiIoOuU';
//     for (let char of str) {
//         if (vowels.includes(char)) count += 1;
//     }
//     return count;
// }

// SOL 3
// function vowels(str) {
//     const matches = str.match(/[aeiou]/gi);
//     if (matches) return matches.length;
//     return 0;
// }
