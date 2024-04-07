function townsSolve(inputData) {
    for (const townData of inputData) {
        const [townName, latitude, longitude] = townData.split(' | ');
        const town = {
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        };
        console.log(town);
    }
}
townsSolve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);
