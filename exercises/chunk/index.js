// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const newArr = [];
    let index = 0;
    while (index < array.length) {
        newArr.push(array.slice(index, size + index));
        index += size;
    }
    return newArr;
}

module.exports = chunk;

// Solution 1
// if (!array || !size) return;
// const newArr = [];
// for (let elem of array) {
//     const last = newArr[newArr.length - 1];
//     if (!last || last.length === size) {
//         newArr.push([elem]);
//     } else {
//         last.push(elem);
//     }
// }
// return newArr;

// Solution 2
// const chunked = [];
// let i = 0;
// while (i < array.length) {
//     chunked.push(array.slice(i, i + size));
//     i += size;
// }
// return chunked;
