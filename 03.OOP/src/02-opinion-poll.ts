class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getInfo(): string {
        return `${this.name} is ${this.age} years old.`
    }
}

function opinionPolls(personInfo: string): void {
    const [name, age] = personInfo.split(' ');
    const person = new Person(name, Number(age));

    console.log(person.getInfo());
}

opinionPolls('Peter 12');