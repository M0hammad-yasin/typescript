"use strict";
let Student = {
    name: "yasin",
    age: 30,
    id: 1,
    getName(id) {
        return this.name;
    },
};
Student.age = 20;
Student.getName(1);
