// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let sortedArray = [...arr];
    for (let i = 0; i < sortedArray.length; i++) {
        for (let j = 0; j < sortedArray.length - i - 1; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                const smaller = sortedArray[j + 1];
                sortedArray[j + 1] = sortedArray[j];
                sortedArray[j] = smaller;
            }
        }
    }
    return sortedArray;
}

function selectionSort(arr) {
    let sortedArray = [...arr];
    for (let i = 0; i < sortedArray.length; i++) {
        let indexOfMin = i;
        for (let j = i + 1; j < sortedArray.length; j++) {
            if (sortedArray[j] < sortedArray[indexOfMin]) {
                indexOfMin = j;
            }
        }
        if (i !== indexOfMin) {
            let smaller = sortedArray[i];
            sortedArray[i] = sortedArray[indexOfMin];
            sortedArray[indexOfMin] = smaller;
        }
    }
    return sortedArray;
}

function mergeSort(arr) {
    if (arr.length < 2) return arr;
    const center = Math.floor(arr.length / 2);
    const [left, right] = [arr.slice(0, center), arr.slice(center)];
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const sortedMergedArray = [];
    while (left.length && right.length) {
        let smaller;
        if (left[0] < right[0]) {
            sortedMergedArray.push(left.shift());
        } else {
            sortedMergedArray.push(right.shift());
        }
    }
    return [...sortedMergedArray, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
