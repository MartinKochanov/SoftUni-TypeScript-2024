
type Person = {
    firstName: string;
    lastName: string;
    age: number
}

function personInfoSolve(firstName: string, lastName: string, age: string): Person {

    const person: Person = { firstName, lastName, age: Number(age) };

    return person;
}
console.log(personInfoSolve("Peter", "Pan", "20"))