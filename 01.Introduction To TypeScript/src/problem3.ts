function solve3(n:string, m:string):void {
    let sum:number = 0;
    for (let i:number = Number(n); i <=Number(m); i++) {
        sum+= i;
    }
    console.log(sum);
}

solve3('1','5')