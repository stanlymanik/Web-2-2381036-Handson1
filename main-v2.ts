interface Human {
  name: string;
  age: number;
  location: string;
  motor: string;
}

let objectHuman: Human = {
  name: "John",
  age: 20,
  location: "Jakarta",
  motor: "Honda",
};

function printHuman(human: Human): void {
  console.log(human.location);
}

printHuman(objectHuman);
