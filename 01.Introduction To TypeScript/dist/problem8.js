"use strict";
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}
function solve8(inputArr) {
    for (const line of inputArr) {
        const catInfo = line.split(' ');
        const name = catInfo[0];
        const age = Number(catInfo[1]);
        const cat = new Cat(name, age);
        cat.meow();
    }
}
solve8(['Mellow 2', 'Tom 5']);
//# sourceMappingURL=problem8.js.map