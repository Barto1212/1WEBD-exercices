type Person = {
  name: string;
  age: number;
};

const employee: Person = { name: "John", age: 34 };
const user: Person = { name: "John", age: 34 };

sayHello(employee);

function sayHello(pers: Person) {
  console.log(`Hello ${pers.name}`);
}
