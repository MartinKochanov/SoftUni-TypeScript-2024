
import { Greeter } from "./greeter";

export class Person implements Greeter.Greeting {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduction() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
    sayGoodbye(name: string) {
        return `Dear ${name}, it was a pleasure meeting you!`;
    }
}

