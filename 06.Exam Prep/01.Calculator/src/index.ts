// function calculator(a: number, operator: string, b: number): string {

//     let result = null;

//     switch (operator) {
//         case '+':
//             result = (a + b).toFixed(2);
//             break;
//         case '-':
//             result = (a - b).toFixed(2);
//             break;
//         case '/':
//             result = (a / b).toFixed(2);
//             break;
//         case '*':
//             result = (a * b).toFixed(2);
//             break;
//         default:
//             result = 'non existing operator!';
//     }
//     return result;
// }


function calculator(a: number, operator: string, b: number): string {

    type Dictionary = {
        [key: string]: string;
    }

    const dictionary: Dictionary = {
        '+': (a + b).toFixed(2),
        '-': (a - b).toFixed(2),
        '/': (a / b).toFixed(2),
        '*': (a * b).toFixed(2),
    }

    if (!dictionary[operator]) {
        return 'Non existing operator!';
    }

    return dictionary[operator];
}

const result = calculator(250, '+', 10);
console.log(result);


