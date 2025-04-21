// import doSomething from "./main.js";
// import { age } from "./main.js";
// import { printSomething } from "./main.js";

// import doSomething, { age, printSomething } from "./main.js";

// console.log(age);

// printSomething();

// doSomething();

// arrays ==> map
// destructring

// array destructuring

const students = ["abcd", "efgh", "ijkl", "xyz"];

// const st1 = students[0];
// const st2 = students[1];

// array destructring --> order

const arr = ["first", "second"];

const [st1, , st3] = students;

console.log(st1);
console.log(st3);

// object distructring

const person = {
  userName: "salman",
  city: "Pune",
  mobNo: 9898878372,
};

const { userName, mobNo, city } = person;

console.log(userName);
console.log(mobNo);

// spread operator

// array

const arr1 = [1, 2, 3, 4];

const arr2 = [5, 6, 7, 8, 9];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

// object

const obj1 = {
  userName: "abcd",
  age: 30,
};

const obj2 = {
  city: "pune",
  profession: "software developer",
};

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

// rest operator

function addNumbers(...nums) {
  console.log(nums); // []
  let sum = 0;
  nums.forEach((el) => {
    sum = sum + el;
  });

  console.log(sum);
}

addNumbers(1, 2, 45, 23, 23, 4, 3444, 54, 53, 4);
