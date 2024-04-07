function inventorySolve(inputData) {
    let heroStorage = [];
    for (const heroData of inputData) {
        const [name, level, ...items] = heroData.split(' / ');
        const hero = {
            name: name,
            level: Number(level),
            items,
        };
        heroStorage.push(hero);
    }
    const sortedStorage = heroStorage.sort((a, b) => a.level - b.level);
    sortedStorage.forEach(hero => {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(', ')}`);
    });
}
inventorySolve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
