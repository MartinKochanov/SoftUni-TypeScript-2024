"use strict";
function solve5(firstNum, secondNum, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '%':
            result = firstNum % secondNum;
            break;
        case '**':
            result = firstNum ** secondNum;
            break;
    }
    console.log(result);
}
solve5(3, 4, '-');
//# sourceMappingURL=problem5.js.map