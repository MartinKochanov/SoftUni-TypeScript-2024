"use strict";
function solve10(inputArr) {
    console.log(sumNumbers(inputArr));
    console.log(sumNumbers(inputArr, true));
    console.log(concatNumbers(inputArr));
}
function sumNumbers(arr, inversed = false) {
    const sum = inversed ?
        arr.reduce((acc, number) => acc += 1 / number, 0)
        : arr.reduce((acc, number) => acc += number, 0);
    return sum;
}
function concatNumbers(arr) {
    const result = arr.join('');
    return result;
}
solve10([1, 2, 3]);
//# sourceMappingURL=problem10.js.map