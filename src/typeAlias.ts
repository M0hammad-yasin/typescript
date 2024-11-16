type Employee = {
  name: string;
  age: number;
  id: number;
  getName: (id: number) => string;
};
let Employee: Employee = {
  name: "yasin",
  age: 30,
  id: 1,
  getName(id: number) {
    return this.name;
  },
};
Employee.age = 20;
Employee.getName(1);
