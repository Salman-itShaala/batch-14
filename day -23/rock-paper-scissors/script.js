const resultDisplay = document.getElementById("result-display");
const usersChoiceDisplay = document.getElementById("users-choice-display");
const computerChoiceDisplay = document.getElementById(
  "computers-choice-display"
);
const userWinCountDisplay = document.getElementById("user-win-count");

const possibleComputerChoices = ["rock", "paper", "scissors"];

let userWincount = 0;

function playGame(userChoice) {
  // to get computer's choice

  const computerChoice = getComputerChoice();

  // updating front end with choices

  updateFrontEnd(userChoice, computerChoice);

  // check who won

  checkWhoWon(userChoice, computerChoice);
}

function getComputerChoice() {
  let randomNmber = Math.floor(Math.random() * 3);

  const computerChoice = possibleComputerChoices[randomNmber];

  return computerChoice;
}

function updateFrontEnd(userChoice, computerChoice) {
  if (userChoice === "rock") {
    usersChoiceDisplay.innerText = "Your choice : 🪨";
  } else if (userChoice === "paper") {
    usersChoiceDisplay.innerText = "Your choice : 📄";
  } else {
    usersChoiceDisplay.innerText = "Your choice : ✂️";
  }

  if (computerChoice === "rock") {
    computerChoiceDisplay.innerText = "Computer's choice : 🪨";
  } else if (computerChoice === "paper") {
    computerChoiceDisplay.innerText = "Computer's choice : 📄";
  } else {
    computerChoiceDisplay.innerText = "Computer's choice : ✂️";
  }
}

function checkWhoWon(userChoice, computerChoice) {
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    resultDisplay.innerText = "Result : Congratulations, You won!! 😁";
    userWincount++;
    userWinCountDisplay.innerHTML = userWincount;
  } else if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    resultDisplay.innerText = "Result : You Lost!! 🥲";
  } else {
    resultDisplay.innerText = "Result : Draw !! 😐";
  }
}
