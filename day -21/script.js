const person = {
  firstName: "Salman",
  lastName: "Shaikh",
  age: 44,
};

// accessing the property
console.log(person.age); // 44

// change

person.age = 28;

// to add extra property

person.city = "Pune";

console.log(person);

person.greet();
