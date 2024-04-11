class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return `${this.name} is ${this.age} years old.`;
    }
}
function opinionPolls(personInfo) {
    const [name, age] = personInfo.split(' ');
    const person = new Person(name, Number(age));
    console.log(person.getInfo());
}
opinionPolls('Peter 12');
