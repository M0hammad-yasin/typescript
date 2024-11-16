let Student: {
  name: string;
  age: number;
  id: number;
  getName: (id: number) => string;
} = {
  name: "yasin",
  age: 30,
  id: 1,
  getName(id: number) {
    return this.name;
  },
};
Student.age = 20;
Student.getName(1);
