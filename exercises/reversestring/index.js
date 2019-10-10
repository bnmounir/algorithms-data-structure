// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //SOLUTION 1
    // return str
    //     .split('')
    //     .reverse()
    //     .join('');
    // SOLUTION 2
    // let arr = [];
    // for (let i = str.length - 1; i >= 0; i--) {
    //     arr.push(str.charAt(i));
    // }
    // console.log(arr);
    // return arr.join('');
    // SOLUTION 3
    // let reversed = '';
    // for (let char of str) {
    //     reversed = char + reversed;
    // }
    // return reversed;
    //SOLUTION 4
    return str.split('').reduce((Accu, Next) => Next + Accu, '');
}
reverse('hello');

module.exports = reverse;
