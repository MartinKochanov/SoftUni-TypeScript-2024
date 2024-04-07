function calorieObjectSolve(inputData) {
    let food = {};
    while (inputData.length > 0) {
        const foodName = inputData.shift();
        const calories = Number(inputData.shift());
        food[foodName] = calories;
    }
    console.log(food);
}
calorieObjectSolve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
