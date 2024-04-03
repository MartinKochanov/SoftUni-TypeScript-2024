"use strict";
function solve7(arr) {
    const middleIndex = Math.floor(arr.length / 2);
    const resultArr = arr.sort((a, b) => a - b).slice(middleIndex);
    return resultArr;
}
console.log(solve7([4, 7, 2, 5]));
//# sourceMappingURL=problem7.js.map