function personInfoSolve(firstName, lastName, age) {
    const person = { firstName, lastName, age: Number(age) };
    return person;
}
console.log(personInfoSolve("Peter", "Pan", "20"));
