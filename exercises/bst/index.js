// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data, node = this) {
        if (node.data > data) {
            if (node.left === null) {
                return (node.left = new Node(data));
            } else {
                node.insert(data, node.left);
            }
        } else {
            if (node.right === null) {
                return (node.right = new Node(data));
            } else {
                node.insert(data, node.right);
            }
        }
    }

    // insert2(data) {
    //     if (data < this.data && this.left) {
    //         this.left.insert2(data);
    //     } else if (data < this.data) {
    //         this.left = new Node(data);
    //     } else if (data > this.data && this.right) {
    //         this.right.insert2(data);
    //     } else if (data > this.data) {
    //         this.right = new Node(data);
    //     }
    // }

    contains(data) {
        if (this.data === data) {
            return this;
        } else if (this.data > data && this.left) {
            return this.left.contains(data);
        } else if (this.data < data && this.right) {
            return this.right.contains(data);
        } else {
            return null;
        }
    }
}

nodeTest = new Node(10);
nodeTest.insert(5);
nodeTest.insert(15);
nodeTest.insert(4);
nodeTest.insert(7);
nodeTest.insert(13);
nodeTest.insert(17);

// console.log(nodeTest);
console.log(nodeTest.contains(5));

module.exports = Node;
