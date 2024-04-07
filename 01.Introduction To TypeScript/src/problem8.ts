class Cat {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    meow(): void {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}




function solve8(inputArr: string[]): void {
    for (const line of inputArr) {
        const catInfo: string[] = line.split(' ');
        const name: string = catInfo[0];
        const age: number = Number(catInfo[1]);
        const cat = new Cat(name, age);
        cat.meow();
    }
}

solve8(['Mellow 2', 'Tom 5']);