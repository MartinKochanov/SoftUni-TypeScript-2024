"use strict";
function solve4(day) {
    let result = '';
    switch (day) {
        case 'Monday':
            result = '1';
            break;
        case 'Tuesday':
            result = '2';
            break;
        case 'Wednesday':
            result = '3';
            break;
        case 'Thursday':
            result = '4';
            break;
        case 'Friday':
            result = '5';
            break;
        case 'Saturday':
            result = '6';
            break;
        case 'Sunday':
            result = '7';
            break;
        default:
            result = 'error';
    }
    console.log(result);
}
solve4('Monday');
solve4('Invalid');
//# sourceMappingURL=problem4.js.map