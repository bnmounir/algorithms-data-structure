// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// expect(console.log.mock.calls[0][0]).toEqual('   #   ');
// expect(console.log.mock.calls[1][0]).toEqual('  ###  ');
// expect(console.log.mock.calls[2][0]).toEqual(' ##### ');
// expect(console.log.mock.calls[3][0]).toEqual('#######');
// expect(console.log.mock.calls.length).toEqual(4);

function pyramid(n, row = 0, level = '') {
    if (row === n) return;
    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }
    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }
    pyramid(n, row, level + add);
}
pyramid(4);

module.exports = pyramid;

//SOL 1
// function pyramid(n = 1, numOfHashes = 1, numOfSpaces = n) {
//     if (n < 1) return console.log('');
//     const hash = '#';
//     const space = ' ';
//     if (numOfSpaces === 1) return console.log(hash.repeat(n * 2 - 1));
//     let str =
//         space.repeat(numOfSpaces - 1) +
//         hash.repeat(numOfHashes) +
//         space.repeat(numOfSpaces - 1);
//     console.log(str);
//     pyramid(n, numOfHashes + 2, numOfSpaces - 1);
// }

//SOL 2
// function pyramid(n, numOfHash = 1) {
//     if (n < 1) return;
//     const hash = '#';
//     const space = ' ';
//     console.log(
//         space.repeat(n - 1) + hash.repeat(numOfHash) + space.repeat(n - 1)
//     );
//     pyramid(n - 1, numOfHash + 2);
// }

// SOL 3
// function pyramid(n) {
//     const midpoint = Math.floor((2 * n - 1) / 2);
//     for (let row = 0; row < n; row++) {
//         let level = '';
//         for (let column = 0; column < 2 * n - 1; column++) {
//             if (midpoint - row <= column && midpoint + row >= column) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }
//         console.log(level);
//     }
// }
