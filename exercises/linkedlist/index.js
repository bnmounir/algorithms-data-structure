// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(data) {
        const newNode = new Node(data, this.head);
        this.head = newNode;
    }
    size() {
        let currNode = this.head;
        let count = 0;
        while (currNode) {
            count++;
            currNode = currNode.next;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) return;
        let currNode = this.head;
        while (currNode.next) {
            currNode = currNode.next;
        }
        return currNode;
    }

    clear() {
        this.head = null;
    }
    removeFirst() {
        if (!this.head) return;
        this.head = this.head.next;
    }
    removeLast() {
        if (!this.head) return;
        let currNode = this.head;
        if (!currNode.next) {
            this.head = null;
        } else {
            while (currNode.next.next) {
                currNode = currNode.next;
            }
            currNode.next = null;
        }
    }
    insertLast(data) {
        // use getLast then add .next = new Node(data) or:
        let currNode = this.head;
        if (!currNode) {
            this.head = new Node(data);
        } else {
            while (currNode.next) {
                currNode = currNode.next;
            }
            currNode.next = new Node(data);
        }
    }
    getAt(index) {
        let currNode = this.head;
        let count = 0;
        while (currNode && index !== count) {
            count++;
            currNode = currNode.next;
        }
        return currNode;
    }
    removeAt(index) {
        if (!this.getAt(index)) return;
        if (index === 0) return this.removeFirst();
        let previousNode = this.getAt(index - 1);
        let nextNode = this.getAt(index + 1);
        if (!nextNode) return this.removeLast();
        if (nextNode) return (previousNode.next = nextNode);
    }
    insertAt(dataArg, index) {
        if (!this.getAt(index)) return this.insertLast(dataArg);
        if (index === 0) return this.insertFirst(dataArg);
        let previousNode = this.getAt(index - 1);
        let currNode = this.getAt(index);
        previousNode.next = new Node(dataArg, currNode);
    }
    forEach(fn) {
        if (typeof fn != 'function') {
            return;
        }

        let counter = 0;
        let node = this.head;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }
    // [Symbol.iterator]: function* ()
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

const l = new LinkedList();
l.insertFirst('a');
l.removeAt(1);

module.exports = { Node, LinkedList };
