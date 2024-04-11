class Trainer {
    name: string;
    numberOfBadges: number = 0;
    pokemons: Pokemon[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addPokemon(pokemon: Pokemon): void {
        this.pokemons.push(pokemon);
    }

    addBadge(): void {
        this.numberOfBadges += 1;
    }

    removePokemonIfNoHp(pokemon: Pokemon): void {
        if (pokemon.health <= 0) {
            const pokemonIndex = this.pokemons.indexOf(pokemon);
            this.pokemons.splice(pokemonIndex, 1);
        }
    }

    pokemonsLoseHpIfNoElementFound(element: string): boolean {
        const elements: string[] = this.pokemons.map(pokemon => pokemon.element);
        if (!elements.includes(element)) {
            this.pokemons.forEach(pokemon => pokemon.loseHealth())
            return true;
        }
        return false;
    }

    shortInfo(): string {
        return `${this.name} ${this.numberOfBadges} ${this.pokemons.length}`
    }
}

class Pokemon {
    name: string;
    element: string;
    health: number;

    constructor(name: string, element: string, health: number) {
        this.name = name;
        this.element = element;
        this.health = health;
    }

    loseHealth(): void {
        this.health -= 10;
    }
}

type TrainerStorage = {
    [key: string]: Trainer;
}

function pokemonTrainers(inputData: string[]): void {
    const trainers: TrainerStorage = {};

    let commandLine: string = inputData.shift();

    while (commandLine !== 'Tournament') {
        const [trainerName, pokemonName, element, hp] = commandLine.split(' ');

        const pokemon = new Pokemon(pokemonName, element, Number(hp));

        if (!trainers.hasOwnProperty(trainerName)) {
            const trainer = new Trainer(trainerName);
            trainers[trainerName] = trainer;
        }

        trainers[trainerName].addPokemon(pokemon);

        commandLine = inputData.shift();
    }

    commandLine = inputData.shift();

    while (commandLine !== 'End') {

        const element: string = commandLine;

        Object.keys(trainers)
            .forEach(trainer => {
                if (!trainers[trainer].pokemonsLoseHpIfNoElementFound(element)) {
                    trainers[trainer].addBadge();
                }
                trainers[trainer].pokemons.forEach(pokemon => trainers[trainer].removePokemonIfNoHp(pokemon));
            })


        commandLine = inputData.shift();
    }

    Object.values(trainers)
        .sort((a, b) => b.numberOfBadges - a.numberOfBadges)
        .forEach(trainer => console.log(trainer.shortInfo()))

}



pokemonTrainers([
    'Peter Charizard Fire 100',
    'George Squirtle Water 38',
    'Peter Pikachu Electricity 10',
    'Tournament', 'Fire',
    'Electricity',
    'End'
])

console.log('------------------------------------------');

pokemonTrainers([
    'Sam Blastoise Water 18',
    'Narry Pikachu Electricity 22',
    'John Kadabra Psychic 90',
    'Tournament',
    'Fire',
    'Electricity',
    'Fire',
    'End'
])