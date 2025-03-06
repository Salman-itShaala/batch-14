// how to wrtite function
function doSomething() {
  console.log("Doing something");
}

// how to call the function
// doSomething();

// write a greetUser function which will print Good morning!

function greetUser(userName) {
  console.log("Good morning " + userName);
}

// write a function named doSummation

function doSummation(num1, num2) {
  console.log(num1 + num2);
}

// doSummation(100, 990);

// write a function which will take a number as input and will
// print square of that number

function doSquare(num) {
  return num * num;
}

const fiveSquare = doSquare(5);

console.log(fiveSquare);

// write a function which will take a number as an input and then
// will print if that number is even or odd

function checkEvenOROdd(num) {
  if (num % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

function sayHello() {
  console.log("Hello");
  return "Hello how are you??";
}

const returndeValue = sayHello();
