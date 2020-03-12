// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let newStr = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        str[i - 1] === ' '
            ? (newStr += str[i].toUpperCase())
            : (newStr += str[i]);
    }
    return newStr;
}
capitalize('i see hello my friend');

module.exports = capitalize;

// function capitalize(str) {
// SOLUTION 1
// return str
//     .split(' ')
//     .map(chunk => chunk.charAt(0).toUpperCase() + chunk.slice(1))
//     .join(' ');
// SOLUTION 2
//     let res = str[0].toUpperCase();
//     for (let i = 1; i < str.length; i++) {
//         str[i - 1] === ' ' ? (res += str[i].toUpperCase()) : (res += str[i]);
//     }
//     return res;
// }
// SOL3
// return str
//     .split(' ')
//     .map(e => e.charAt(0).toUpperCase() + e.slice(1))
//     .join(' ');
//SOL 4
// let newStr = str.split('').reduce((acc, cur, idx, srcArr) => {
//     if (idx === 0 || srcArr[idx - 1] === ' ')
//         return (acc += cur.toUpperCase());
//     return (acc += cur);
// }, '');
// return newStr;
