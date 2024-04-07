function solve10(inputArr: number[]): void {
    console.log(sumNumbers(inputArr));
    console.log(sumInverseValuesOfTheNumbers(inputArr));
    console.log(concatNumbers(inputArr));


}

function sumNumbers(arr: number[]): number {
    const sum: number = arr.reduce((acc: number, number) => acc += number, 0);
    return sum;
}

function sumInverseValuesOfTheNumbers(arr: number[]): number {
    const inverseSum = arr.reduce((acc: number, number) => acc += 1 / number, 0);
    return inverseSum;
}

function concatNumbers(arr:number[]):string {
    const result = arr.join('');
    return result;
}

solve10([1, 2, 3]);