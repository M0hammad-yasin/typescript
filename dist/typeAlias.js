"use strict";
let Employee = {
    name: "yasin",
    age: 30,
    id: 1,
    getName(id) {
        return this.name;
    },
};
Employee.age = 20;
Employee.getName(1);
