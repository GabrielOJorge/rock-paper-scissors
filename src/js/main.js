function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomValue = (list) => {
    return list[Math.floor(Math.random() * list.length)];
  };
  
  return randomValue(options);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert("Tie!");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    alert("You win! Rock beats Scissors.");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    alert("You lose! Paper beats Rock.");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    alert("You win! Paper beats Rock.");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    alert("You lose! Scissors beats Paper.");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    alert("You win! Scissors beats Paper.");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    alert("You lose! Rock beats Scissors.");
  } else if (playerSelection === null) {
    alert("What are you afraid of?");
  } else {
    alert("Choose a possible play!");
  }
}

const playerSelection = prompt("Let the battle begin! Rock, Paper or Scissors?");
const computerSelection = computerPlay();
playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());