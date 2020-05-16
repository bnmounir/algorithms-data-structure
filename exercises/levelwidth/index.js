// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    // if (!root) return;

    let widthsHolderArray = [0];
    let iterationHelperArray = [root, 'stop'];
    while (iterationHelperArray.length > 1) {
        let node = iterationHelperArray.shift();
        if (node === 'stop') {
            iterationHelperArray.push('stop');
            widthsHolderArray.push(0);
        } else {
            iterationHelperArray.push(...node.children);
            widthsHolderArray[widthsHolderArray.length - 1]++;
        }
    }
    return widthsHolderArray;
}

module.exports = levelWidth;
