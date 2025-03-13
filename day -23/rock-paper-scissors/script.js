// rock, paper, scissors

const possibleComputerChoices = ["rock", "paper", "scissors"];

function playGame(userChoice) {
  let randomNmber = Math.floor(Math.random() * 3);

  const computerChoice = possibleComputerChoices[randomNmber];

  console.log("Computer's choice ", computerChoice);
  console.log("User's choice is ", userChoice);

  //   if(userChoice === "rock" && computerChoice === "scissors"){

  //   }
}
