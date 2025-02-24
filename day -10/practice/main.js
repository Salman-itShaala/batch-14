let person = {
  userName: "Salman",
  age: 31,
};

// accessing properties
console.log(person.userName); // Salman

console.log(person.age); // 31

// adding new properties
person.city = "Pune";
person.isMarried = false;

console.log(person); // {userName: 'Salman', age: 31}

// changing existing properties
person.userName = "Nitin";

console.log(person); // {userName: 'Nitin', age: 31}
