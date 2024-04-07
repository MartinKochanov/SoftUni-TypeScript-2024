function solve7(arr: number[]): number[] {
    const middleIndex = Math.floor(arr.length / 2);
    const resultArr: number[] = arr.sort((a, b) => a - b).slice(middleIndex);
    return resultArr;
}

console.log(solve7([4, 7, 2, 5]));
