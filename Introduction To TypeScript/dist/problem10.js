"use strict";
function solve10(inputArr) {
    console.log(sumNumbers(inputArr));
    console.log(sumInverseValuesOfTheNumbers(inputArr));
    console.log(concatNumbers(inputArr));
}
function sumNumbers(arr) {
    const sum = arr.reduce((acc, number) => acc += number, 0);
    return sum;
}
function sumInverseValuesOfTheNumbers(arr) {
    const inverseSum = arr.reduce((acc, number) => acc += 1 / number, 0);
    return inverseSum;
}
function concatNumbers(arr) {
    const result = arr.join('');
    return result;
}
solve10([1, 2, 3]);
//# sourceMappingURL=problem10.js.map