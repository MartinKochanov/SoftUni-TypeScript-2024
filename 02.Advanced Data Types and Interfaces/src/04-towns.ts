function townsSolve(inputData: string[]): void {

    type Town = {
        town: string;
        latitude: string;
        longitude: string;
    }

    for (const townData of inputData) {

        const [townName, latitude, longitude] = townData.split(' | ');

        const town: Town = {
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        }

        console.log(town);

    }

}

townsSolve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)