class Employee {

    name: string;
    personalNumber: number;
    constructor(name: string, personalNumber: number) {
        this.name = name;
        this.personalNumber = personalNumber;
    }

    employeeInfo(): string {
        return `Name: ${this.name} -- Personal Number: ${this.personalNumber}`
    }
}


function solve9(inputArr: string[]): void {
    for (const line of inputArr) {
        const name: string = line;
        const personalNumber = name.length;
        const employee = new Employee(name, personalNumber);
        console.log(employee.employeeInfo());
    }
}

solve9(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])