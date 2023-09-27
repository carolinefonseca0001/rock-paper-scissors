console.log("Hello world!");

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "ROCK!";
    case 1:
      return "PAPER!";
    case 2:
      return "SCISSORS!";
  }
}

const computerSelection = getComputerChoice();
let playerSelection = prompt("ROCK? PAPER? OR SCISSORS?");

function playRound(playerSelection, compSelection) {
  if (playerSelection === "ROCK!" && compSelection === "SCISSORS!")
    return (
      "You chose: " +
      playerSelection +
      " The robot chose: " +
      compSelection +
      " You win!"
    );
  if (playerSelection === "ROCK!" && compSelection === "ROCK!")
    return (
      "You chose: " +
      playerSelection +
      " The robot chose: " +
      compSelection +
      " It's a tie"
    );
  if (playerSelection === "ROCK!" && compSelection === "PAPER!")
    return (
      "You chose: " +
      playerSelection +
      " The robot chose: " +
      compSelection +
      " The robot wins!"
    );
  if (playerSelection === "PAPER!" && compSelection === "ROCK!")
    return (
      "You chose: " +
      playerSelection +
      " The robot chose: " +
      compSelection +
      " You win!"
    );
  if (playerSelection === "PAPER!" && compSelection === "PAPER!")
    return (
      "You chose: " +
      playerSelection +
      " The robot chose: " +
      compSelection +
      " It's a tie"
    );
  if (playerSelection === "PAPER!" && compSelection === "SCISSORS!")
    return (
      "You chose: " +
      playerSelection +
      " The robot chose: " +
      compSelection +
      " The robot wins!"
    );
  if (playerSelection === "SCISSORS!" && compSelection === "PAPER!")
    return (
      "You chose: " +
      playerSelection +
      " The robot chose: " +
      compSelection +
      " You win!"
    );
  if (playerSelection === "SCISSORS!" && compSelection === "SCISSORS!")
    return (
      "You chose: " +
      playerSelection +
      " The robot chose: " +
      compSelection +
      " It's a tie"
    );
  if (playerSelection === "SCISSORS!" && compSelection === "ROCK!")
    return (
      "You chose: " +
      playerSelection +
      " The robot chose: " +
      compSelection +
      " The robot wins!"
    );
}

console.log(playRound(playerSelection, computerSelection));
