function calorieObjectSolve(inputData: string[]): void {

    let food: {[key:string]: number} = {};

    while (inputData.length > 0) {

        const foodName: string = inputData.shift();
        const calories: number = Number(inputData.shift());
        food[foodName] = calories;
    }

    console.log(food);

}

calorieObjectSolve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);