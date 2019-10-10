// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // SOLUTION 1
    // return str
    //     .split(' ')
    //     .map(chunk => chunk.charAt(0).toUpperCase() + chunk.slice(1))
    //     .join(' ');
    // SOLUTION 2
    let res = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        str[i - 1] === ' ' ? (res += str[i].toUpperCase()) : (res += str[i]);
    }
    return res;
}

module.exports = capitalize;
