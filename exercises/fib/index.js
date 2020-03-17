// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) return cache[args];
        const result = fn.call(this, ...args);
        cache[args] = result;
        return result;
    };
}

function slowFib(n) {
    if (n < 2) return n;
    return slowFib(n - 2) + slowFib(n - 1);
}

const fib = memoize(slowFib);
// console.time('n-1 + n-2');
// fib(39);
// console.timeEnd('n-1 + n-2');

module.exports = fib;

// function fib(n) {
//     const resArr = [0,1]
//     for (let i=2; i<=n; i++) {
//         resArr.push(resArr[i-2]+resArr[i-1])
//     }
//     return resArr[n]
// }

// Solution 2 recursion
// function fib(n, i = 2, resArr = [0, 1]) {
//     let newValue = resArr[i - 2] + resArr[i - 1];
//     resArr.push(newValue);
//     if (n <= i) {
//         return resArr[n];
//     }
//     //otherwise call the function again
//     return fib(n, i + 1, resArr);
// }
// console.time('arr method');
// fib(4000);
// console.timeEnd('arr method');
