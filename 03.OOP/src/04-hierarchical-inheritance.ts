class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log('eating...');

    }
}

class Dog extends Animal {
    bark() {
        console.log('barking...')
    }
}

class Cat extends Animal {
    meow() {
        console.log('meowing...')
    }
}
