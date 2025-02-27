const day = "1";

if (day == 1) {
  console.log("Monday");
} else if (day == 2) {
  console.log("Tuesday");
} else if (day == 3) {
  console.log("Wednesday");
} else if (day == 4) {
  console.log("Thursday");
} else if (day == 5) {
  console.log("Friday");
} else if (day == 6) {
  console.log("Saturday");
} else if (day == 7) {
  console.log("AAj toh Sunday hai...");
}

//  ===
// "10" and 10

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day value");
// }

// Q1. given age of user check whether he/she is eligible for marriage or not (21)

let age = 24;

if (age >= 21) {
  console.log("You are eligible for marriage");
} else {
  console.log("You are not eligible for marriage");
}

// Q2. Given a number check whether that number is divisible by 10 or not

// 11
let givenNum = 13;

if (givenNum % 10 == 0) {
  console.log("Given number is divisible by 10");
} else {
  console.log("Given number is not divisible by 10");
}

// Q3. Given percentages of student
// 80 - 90 --> Excellent
// 70 - 80 --> Good
// 60 - 70 --> OK
// 50 - 60 --> Avg
// 40 - 50 --> You are legend
// 30 - 40 --> You are ultralegend
// 20 - 30 --> Tumse na ho payega
// 10 - 20 --> Bhagwan hi bacha sakte hai bhai

let percentages = 100;

if (percentages >= 80) {
  console.log("Excellent");
} else if (percentages >= 70) {
  console.log("Good");
} else if (percentages >= 60) {
  console.log("Ok");
} else if (percentages >= 50) {
  console.log("Avg");
} else if (percentages >= 40) {
  console.log("You are legend");
} else if (percentages >= 30) {
  console.log("You are Ultralegend");
} else if (percentages >= 20) {
  console.log("Tumse na ho payega");
} else if (percentages >= 10) {
  console.log("Bhagwan hi bacha sakte hai bhai");
} else {
  console.log("Invalid percentage value");
}
