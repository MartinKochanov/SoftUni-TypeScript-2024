class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log('eating...');
    }
}
class Dog extends Animal {
    bark() {
        console.log('barking...');
    }
}
class Cat extends Animal {
    meow() {
        console.log('meowing...');
    }
}
