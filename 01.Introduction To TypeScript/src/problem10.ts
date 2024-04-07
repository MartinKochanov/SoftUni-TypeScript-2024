function solve10(inputArr: number[]): void {
    console.log(sumNumbers(inputArr));
    console.log(sumNumbers(inputArr, true));
    console.log(concatNumbers(inputArr));


}

function sumNumbers(arr: number[], inversed: boolean = false): number {
    const sum: number = inversed ?
        arr.reduce((acc: number, number) => acc += 1 / number, 0)
        : arr.reduce((acc: number, number) => acc += number, 0);
    return sum;
}


function concatNumbers(arr: number[]): string {
    const result = arr.join('');
    return result;
}

solve10([1, 2, 3]);