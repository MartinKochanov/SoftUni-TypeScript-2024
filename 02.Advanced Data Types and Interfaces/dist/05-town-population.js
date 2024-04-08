function townPopulationSolve(inputData) {
    const towns = {};
    for (const townData of inputData) {
        const [townName, population] = townData.split(' <-> ');
        if (!towns.hasOwnProperty(townName)) {
            towns[townName] = Number(population);
        }
        else {
            towns[townName] = towns[townName] + Number(population);
        }
    }
    for (const key in towns) {
        console.log(`${key} : ${towns[key]}`);
    }
}
townPopulationSolve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
