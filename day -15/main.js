// given two numbers find max number
// eg.  10 , 44 --> 44

// given three numbers find max number
// eg. 1, 24, 100 --> 100

let a = 1;
let b = 24;
let c = 100;

const maxNumber = Math.max(1000, 24, 100, 2000);
const minNumber = Math.min(1000, 24, 100, 2000);

console.log(minNumber);

// swap the values of given two varibles
let x = 100;
let y = 200;

let temp = x;

x = y;
y = temp;

// x = 200;
// y = 100;

// calculate sum of numbers from 1 to 50;
// 1 + 2 + 3... + 50 -->

// caculate factorial of given number
// 5 = 1 * 2 * 3 * 4 * 5
// 3 = 1 * 2 * 3 = 6

// given minutes convert them into seconds
let minutes = 10; // 600 sec

let seconds = minutes * 60;

console.log(seconds);

// given radius of circle calculate it's area
// formula to calculate area = pi * r ^ 2

let radius = 21;

let areaOfCircle = 3.14 * radius * radius;

// given height and base caculate area of triagle
// area = 1/2 * b * h

let height = 20;
let width = 10;

// given temprature in farenheit convert it to degree celcius

// check whether given number is prime or not.
// 11 - 2,3,4,5,6,7,8,9,10

let givenNumber = 11;

let isPrime = true;

for (let i = 2; i < givenNumber; i++) {
  if (givenNumber % i == 0) {
    isPrime = false;
    break;
  }
}

if (isPrime == true) {
  console.log("Given number is prime");
} else {
  console.log("Given number is not prime");
}
