// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, c = 1) {
    const hash = '#';
    const space = ' ';
    if (n === c) return console.log(hash.repeat(c));
    let str = hash.repeat(c) + space.repeat(n - c);
    console.log(str);
    steps(n, c + 1);
}

module.exports = steps;

//Solution 1
// function steps(n) {
//     const hash = '#';
//     const space = ' ';
//     if (n <= 1) return console.log(hash);
//     for (let i = 1; i <= n; i++) {
//         console.log(hash.repeat(i) + space.repeat(n - i));
//     }
// }

// SOLUTION 2
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';
//         for (let column = 0; column < n; column++) {
//             if (column <= row) stair += '#';
//             else stair += ' ';
//         }
//         console.log(stair);
//     }
// }
