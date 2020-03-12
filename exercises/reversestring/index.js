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
    // let revStr = '';
    // for (let char of str) {
    //     revStr = char + revStr;
    // }
    // return revStr;
    //SOLUTION 4
    return str.split('').reduce((Accu, Next) => Next + Accu, '');
    //SOLUTION 5
    // const arr = str.split('');
    // const revArr = [];
    // for (let i = 0; i < str.length; i++) {
    //     revArr.push(arr.pop());
    // }
    // return revArr.join('');
}
reverse('hello');

module.exports = reverse;
