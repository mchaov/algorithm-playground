const swap = require("../helpers/arraySwap");

// demo array
let arr1 = [2, 5, 8, 7, 6, 9, 1, 3, 4, 0, 12, 15, 18, 17, 16, 19, 11, 13, 14, 10, 22, 25, 28, 27, 26, 29, 21, 23, 24, 20];

// https://en.wikipedia.org/wiki/Quicksort#Lomuto_partition_scheme
function partition(arr, l, r) {
    let p, i, x;
    p = l - 1;
    x = arr[r];
    for (i = l; i <= r; i++) {
        if (arr[i] <= x) {
            p++;
            arr.swap(p, i);
        }
    }
    if (p === r) p--;
    return p;
}

function quickSort(arr, l, r) {
    let p;
    if (l < r) {
        p = partition(arr, l, r);
        quickSort(arr, l, p);
        quickSort(arr, p + 1, r);
    }
}

// https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme
function quickSortHoare(arr, l, r) {
    let i, j, x;
    i = l;
    j = r;
    x = arr[r];
    do {
        while (x > arr[i]) i++;
        while (x < arr[j]) j--;
        if (i <= j) {
            arr.swap(i, j);
            i++;
            j--;
        }
    } while (j >= i);

    if (j > l) quickSortHoare(arr, l, j);
    if (i < r) quickSortHoare(arr, i, r);

    return arr;
}