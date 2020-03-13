// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

//           [[1,2],
//           [4,3]]

function matrix(n) {
    const resultArray = [];
    for (let i = 0; i < n; i++) {
        resultArray.push([]);
    }
    counter = 1;
    Row1 = 0;
    Row2 = n - 1;
    Col1 = 0;
    Col2 = n - 1;
    while (Row1 <= Row2 && Col1 <= Col2) {
        for (let i = Col1; i <= Col2; i++) {
            resultArray[Row1][i] = counter;
            counter++;
        }
        Row1++;
        for (let i = Row1; i <= Row2; i++) {
            resultArray[i][Col2] = counter;
            counter++;
        }
        Col2--;
        for (let i = Col2; i >= Col1; i--) {
            resultArray[Row2][i] = counter;
            counter++;
        }
        Row2--;
        for (let i = Row2; i >= Row1; i--) {
            resultArray[i][Col1] = counter;
            counter++;
        }
        Col1++;
    }
    return resultArray;
}

module.exports = matrix;

// function matrix(n) {
//     const globalArray = [];
//     for (let i = 0; i < n; i++) {
//         globalArray.push([]);
//     }
//     let counter = 1;
//     let startColumn = 0;
//     let endColumn = n - 1;
//     let startRow = 0;
//     let endRow = n - 1;
//     while (startColumn <= endColumn && startRow <= endRow) {
//         //top row
//         for (let i = startColumn; i <= endColumn; i++) {
//             globalArray[startRow][i] = counter;
//             counter++;
//         }
//         startRow++;
//         //right column
//         for (let i = startRow; i <= endRow; i++) {
//             globalArray[i][endColumn] = counter;
//             counter++;
//         }
//         endColumn--;
//         //bottom row
//         for (let i = endColumn; i >= startColumn; i--) {
//             globalArray[endRow][i] = counter;
//             counter++;
//         }
//         endRow--;
//         for (let i = endRow; i >= startRow; i--) {
//             globalArray[i][startColumn] = counter;
//             counter++;
//         }
//         startColumn++;
//     }
//     return globalArray;
// }
