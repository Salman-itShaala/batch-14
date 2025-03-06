// Scope

// let      --> block scoped
// const    --> block scoped
// var      --> function scoped

// global scope
// let age = 26;

// function printSomething() {
//   if (age > 18) {
//     // local scope varialbe
//     let msg = "You can vote";
//   }

//   console.log(msg);
// }

// // printSomething();

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// console.log(i);

function convetMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  console.log(seconds);
}

function incrementByOne(number) {
  const incresedNum = number + 1;
  return incresedNum;
}

function calculateAreaOfTriangle(base, height) {
  const area = 0.5 * base * height;
  return area;
}

console.log(calculateAreaOfTriangle(11, 22));
