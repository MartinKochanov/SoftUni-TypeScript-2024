class Employee {
    name: string
    salary: number;
    position: string;
    department: string;
    email?: string = 'n/a';
    age?: number = -1;

    constructor(name: string, salary: number, position: string, department: string, email?: string, age?: number) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        if (email !== undefined) {
            this.email = email;
        }
        if (age != undefined && !Number.isNaN(age)) {
            this.age = age;
        }
    }

    shortInfo(): string {
        return `${this.name} ${this.salary.toFixed(2)} ${this.email} ${this.age}`;
    }


}
class Department {
    employees: Employee[] = [];


    getAverageSalary(): number {
        let averageSalary: number = 0;
        this.employees.forEach(employee => {
            averageSalary += employee.salary
        })
        return averageSalary / this.employees.length;
    }

    sortEmployeesBySalary(): Employee[] {
        return this.employees.sort((a, b) => b.salary - a.salary)
    }
}

type DepartmentStorage = {
    [key: string]: Department;
}

function companyRoaster(dataString: string) {

    const departments: DepartmentStorage = {};

    const dataArr = dataString.split(', ');
    let n: number = Number(dataArr.shift());

    for (let i = 0; i < n; i++) {
        const employeeinfo: string[] = dataArr[i].split(' ');
        if (employeeinfo.length < 5) {

            const [name, salary, position, department] = employeeinfo;
            const employee = new Employee(name, Number(salary), position, department);

            if (!departments.hasOwnProperty(department)) {
                departments[department] = new Department();
            }

            departments[department].employees.push(employee);

        } else if (employeeinfo.length < 6) {

            const [name, salary, position, department, email, age] = employeeinfo;
            const employee = new Employee(name, Number(salary), position, department, email, Number(age));

            if (!departments.hasOwnProperty(department)) {
                departments[department] = new Department();
            }

            departments[department].employees.push(employee);

        } else {

            const [name, salary, position, department, email, age] = employeeinfo;
            const employee = new Employee(name, Number(salary), position, department, email, Number(age));

            if (!departments.hasOwnProperty(department)) {
                departments[department] = new Department();
            }

            departments[department].employees.push(employee);
        }
    }

    const highestAverageSalaryDepartment: string = Object.keys(departments)
        .sort((a, b) => departments[b].getAverageSalary() - departments[a].getAverageSalary())
        .filter((key, index) => index === 0)
        .join('');


    console.log(`Highest Average Salary: ${highestAverageSalaryDepartment}`);
    const sortedEmployees = departments[highestAverageSalaryDepartment].sortEmployeesBySalary();
    sortedEmployees
        .forEach(employee => console.log(employee.shortInfo()))


}


companyRoaster('4, Peter 120.00 Dev Development peter@abv.bg 28, Tina 333.33 Manager Marketing 33, Sam 840.20 ProjectLeader Development sam@sam.com, George 0.20 Freeloader Nowhere 18, ')
companyRoaster('6, Silver 496.37 Temp Coding silver@yahoo.com, Sam 610.13 Manager Sales, John 609.99 Manager Sales john@abv.bg 44, Venci 0.02 Director BeerDrinking beer@beer.br 23, Andre 700.00 Director Coding, Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey')



