// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

// function validate(node, min = null, max = null) {
//     if (node.right || node.left) {
//         if (node.right) {
//             if (node.right.data < node.data) return false;
//             return validate(node.right, node.data, node.right.data);
//         }
//         if (node.left) {
//             if (node.left.data > node.data) return false;
//             return validate(node.left, node.left.data, node.data);
//         }
//     } else {
//         return true;
//     }
// }

function validate(node, min = null, max = null) {
    if (max !== null && node.data > max) {
        return false;
    }
    if (min !== null && node.data < min) {
        return false;
    }
    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }
    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }
    return true;
}

module.exports = validate;
