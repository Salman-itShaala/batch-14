// loops

// 1. for loop

for (let i = 1; i <= 5; ++i) {
  console.log("Akash Aware");
}

// print all numbers from 1 to 50

for (let j = 1; j <= 50; j++) {
  if (j % 2 == 0) {
    console.log(j);
  }
}

for (let j = 2; j <= 50; j = j + 2) {
  console.log(j);
}

// print even numbers from 1 to 50

// print 10's table

// print perfect squares of numbers from 1 to 10

// 1 * 1 = 1
// 2 * 2 = 4
// 3 * 3 = 9
// 4 * 4 = 16
// ...
// 10 * 10 = 100

for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}

// for numbers between 1 - 100,  if number is divisible by 3 you will print "fizz"
// and if the number is divisible by 5 you will print "buzz"
// and if the number is divisible by both (5 and 3 --> 15) print "Fizz Buzz"

for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log("fizz Buzz " + i);
  } else if (i % 5 == 0) {
    console.log("Buzz " + i);
  } else if (i % 3 == 0) {
    console.log("Fizz " + i);
  }
}
