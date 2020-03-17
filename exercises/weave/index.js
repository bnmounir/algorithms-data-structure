// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

// Recursion
function weave(sourceOne, sourceTwo, resQueue = new Queue()) {
    if (!sourceOne.peek() && !sourceTwo.peek()) return resQueue;
    if (sourceOne.peek()) resQueue.add(sourceOne.remove());
    if (sourceTwo.peek()) resQueue.add(sourceTwo.remove());
    return weave(sourceOne, sourceTwo, resQueue);
}

module.exports = weave;

// Recursion
// function weave(sourceOne, sourceTwo, resQueue = new Queue()) {
//     if (!sourceOne.peek() && !sourceTwo.peek()) {
//         console.log('No peeks in both queues: ', resQueue);
//         return resQueue;
//     }
//     if (sourceOne.peek()) {
//         resQueue.add(sourceOne.remove());
//     }
//     if (sourceTwo.peek()) {
//         resQueue.add(sourceTwo.remove());
//     }
//     return weave(sourceOne, sourceTwo, resQueue);
// }

// while loop
// function weave(sourceOne, sourceTwo) {
//     const resQueue = new Queue();
//     while (sourceOne.peek() || sourceTwo.peek()) {
//         if (sourceOne.peek()) {
//             resQueue.add(sourceOne.remove());
//         }
//         if (sourceTwo.peek()) {
//             resQueue.add(sourceTwo.remove());
//         }
//     }
//     return resQueue;
// }
