"use strict";
function solve6(arr) {
    const result = arr.map((element) => Number(element)).filter((number, index) => index % 2 === 0).join(', ');
    return result;
}
console.log(solve6(['20', '30', '40', '50', '60']));
//# sourceMappingURL=problem6.js.map