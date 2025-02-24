// number
const percentage = 89.8;

console.log(typeof percentage);

// boolean -> true, false
let isMarried = true;

console.log(typeof isMarried);

// bigint
let distanceToSun = 34n;

console.log(typeof distanceToSun);

// string -> '', ""
let userName = "Salman";

console.log(typeof userName);

// undefined
let age;

console.log(typeof age);

// null -> typeof null is always object, this is very famous bug in js
let marks = null;

console.log(typeof marks);

// object -> {}, you can store multiple values in key value pair.
let person = {
  name: "Salman",
  age: 45,
};

console.log(typeof person);

// Symbol -> unique values
let uniqueValue = Symbol("this is symbol");

console.log(typeof uniqueValue);
