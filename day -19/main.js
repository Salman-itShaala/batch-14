function checkEvenOdd() {
  // to ask user for a number
  const userInput = prompt("Enter a number."); // string or null // "4" --> 4

  if (userInput % 2 === 0) {
    alert("Given number is even");
  } else {
    alert("Given number is not even");
  }
}

function greetUser() {
  const userName = prompt("Enter your name");
  alert(`Hello ${userName} Welcome to our website`);
}

function calculateNoOfDigits(number) {
  //1234.
  let numOfDigits = 0;

  while (number > 0) {
    const ans = number / 10; // 123.4
    number = Math.floor(ans); // 123
    numOfDigits++;
  }

  console.log(numOfDigits);
}
