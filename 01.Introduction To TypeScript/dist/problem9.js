"use strict";
class Employee {
    constructor(name, personalNumber) {
        this.name = name;
        this.personalNumber = personalNumber;
    }
    employeeInfo() {
        return `Name: ${this.name} -- Personal Number: ${this.personalNumber}`;
    }
}
function solve9(inputArr) {
    for (const line of inputArr) {
        const name = line;
        const personalNumber = name.length;
        const employee = new Employee(name, personalNumber);
        console.log(employee.employeeInfo());
    }
}
solve9(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
//# sourceMappingURL=problem9.js.map