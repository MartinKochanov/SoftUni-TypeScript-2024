const inputData = [
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
];
function solve(input) {
    const result = {};
    for (const line of input) {
        const [town, product, price] = line.split(' | ');
        if (!result[product]) {
            result[product] = {};
        }
        result[product][town] = Number(price);
    }
    const tuples = Object.entries(result);
    for (const [product, towns] of tuples) {
        const townsPriceTuples = Object.entries(towns);
        const sorted = townsPriceTuples.sort((a, b) => {
            return a[1] - b[1];
        });
        const [town, price] = sorted[0];
        console.log(`${product} -> ${price} (${town})`);
    }
}
solve(inputData);
