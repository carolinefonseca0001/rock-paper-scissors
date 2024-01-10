let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("input");

function computerPlay() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
  buttons.forEach((elem) => {
    elem.disabled = true;
  });
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let result = "";

  if (
    (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
    (playerSelection == "SCISSORS" && computerSelection == "PAPER") ||
    (playerSelection == "PAPER" && computerSelection == "ROCK") ||
    (playerSelection == "FIRE" && computerSelection == "SCISSORS") ||
    (playerSelection == "FIRE" && computerSelection == "PAPER") ||
    (playerSelection == "FIRE" && computerSelection == "ROCK")
  ) {
    playerScore += 1;
    result =
      "You win this round! " +
      playerSelection +
      " beats " +
      computerSelection +
      "<br><br>Player score: " +
      playerScore +
      "<br>Computer score: " +
      computerScore;

    if (playerScore == 5) {
      result += "<br><br>You won the game! Reload the page to play again";
      disableButtons();
    }
  } else if (playerSelection == computerSelection) {
    result =
      "It's a tie. You both chose " +
      playerSelection +
      "<br><br>Player score: " +
      playerScore +
      "<br>Computer score: " +
      computerScore;
  } else {
    computerScore += 1;
    result =
      "You lose! " +
      computerSelection +
      " beats " +
      playerSelection +
      "<br><br>Player score: " +
      playerScore +
      "<br>Computer score: " +
      computerScore;

    if (computerScore == 5) {
      result +=
        "<br><br>The robot won the game! Try some FIRE next time. Reload the page to play again";
      disableButtons();
    }
  }

  document.getElementById("result").innerHTML = result;
  return;
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.value);
  });
});
