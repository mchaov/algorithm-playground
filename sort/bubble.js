const swap = require("../helpers/arraySwap");

// demo array
let arr1 = [2, 5, 8, 7, 6, 9, 1, 3, 4, 0, 12, 15, 18, 17, 16, 19, 11, 13, 14, 10, 22, 25, 28, 27, 26, 29, 21, 23, 24, 20];

function bubbleClassic(arr) {
    let length = arr.length, swapped = true, i;

    while (swapped) {
        swapped = false;
        for (i = 1; i <= length; i++) {
            if (arr[i] < arr[i - 1]) {
                arr.swap(i, i - 1);
                swapped = true;
            }
        }
    }
    return arr;
}

function bubbleOptimized(arr) {
    let length = arr.length, newLength = length, i;
    while (length !== 0) {
        newLength = 0;
        for (i = 1; i <= length; i++) {
            if (arr[i] < arr[i - 1]) {
                arr.swap(i, i - 1);
                newLength = i;
            }
        }
        length = newLength;
    }
    return arr;
}

function bubbleRecursive(arr) {
    let length = arr.length, newLength = length, i;

    newLength = 0;

    for (i = 1; i <= length; i++) {
        if (arr[i] < arr[i - 1]) {
            arr.swap(i, i - 1);
            newLength = i;
        }
    }

    length = newLength;

    if (length !== 0) return bubbleRecursive(arr);

    return arr;
}