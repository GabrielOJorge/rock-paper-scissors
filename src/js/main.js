function computerPlay() {
  const play = ["Rock", "Paper", "Scissors"];
  const randomValue = list => {
    return list[Math.floor(Math.random() * list.length)];
  };
  
  return randomValue(play);
}

let playerScore = 0;
let computerScore = 0;

function game() {
  let playerSelection = prompt("Let the battle begin! Rock, Paper or Scissors?");
  let computerSelection = computerPlay();
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      alert("Tie!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      alert("You win! Rock beats Scissors.");
      playerScore++;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      alert("You lose! Paper beats Rock.");
      computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      alert("You win! Paper beats Rock.");
      playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      alert("You lose! Scissors beats Paper.");
      computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      alert("You win! Scissors beats Paper.");
      playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      alert("You lose! Rock beats Scissors.");
      computerScore++;
    } else {
      alert("Choose a possible play!");
    }
  }
  
  playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
}

// while (playerScore < 3 && computerScore < 3) {
//   game();
// }

if (playerScore === 3) {
  alert("Congratulations! You won the game!")
} else if (computerScore === 3) {
  alert("Sorry, you lost the game!")
}