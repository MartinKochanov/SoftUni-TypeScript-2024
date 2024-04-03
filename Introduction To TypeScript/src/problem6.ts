function solve6(arr: string[]): string {
    const result: string = arr.map((element: string): number => Number(element)).filter((number, index) => index % 2 === 0).join(', ');
    return result;
}

console.log(solve6(['20', '30', '40', '50', '60']));
