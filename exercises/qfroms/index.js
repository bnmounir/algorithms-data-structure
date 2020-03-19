// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this._stack1 = new Stack();
        this._stack2 = new Stack();
    }
    add(item) {
        this._stack2.push(item);
    }
    remove() {
        if (!this._stack1.peek()) {
            while (this._stack2.peek()) {
                let last_out_s2 = this._stack2.pop();
                this._stack1.push(last_out_s2);
            }
        }
        return this._stack1.pop();
    }
    peek() {
        if (!this._stack1.peek()) {
            while (this._stack2.peek()) {
                let last_out_s2 = this._stack2.pop();
                this._stack1.push(last_out_s2);
            }
        }
        return this._stack1.peek();
    }
}
const q = new Queue();
console.log(q);
q.add(1);
console.log(q);
q.add(2);
console.log(q);
q.peek(); // returns 1
console.log(q);
q.remove(); // returns 1
console.log(q);
q.remove(); // returns 2
console.log(q);

module.exports = Queue;
