// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    //SOLUTION 1
    // const arr = n.toString().split('');
    // if (n >= 0) {
    //     return parseInt(arr.reverse().join(''));
    // } else {
    //     return -parseInt(
    //         arr
    //             .splice(1, arr.length - 1)
    //             .reverse()
    //             .join('')
    //     );
    // }
    //SOLUTION 2
    const sign = Math.sign(n);
    // const abs = Math.abs(n); // get rid of the negative sign
    const reversedStr = n
        .toString()
        .split('')
        .reverse()
        .join('');
    // parseInt going to evaluate only number getting rid of the negative sign on the other side of reverse like so -501 > "105-" > to 105
    return sign * parseInt(reversedStr);
}

module.exports = reverseInt;
