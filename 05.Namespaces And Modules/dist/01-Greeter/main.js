"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
// TODO: Make it work with ///<reference path="">
let p = new person_1.Person('Ivan Ivanov', 25);
console.log(p.introduction());
console.log(p.sayGoodbye('Petar Petrov'));
