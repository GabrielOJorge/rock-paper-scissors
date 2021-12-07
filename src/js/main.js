const startBtn = document.querySelector('.start-btn');
const textDisplay = document.querySelector('#text-display')
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let playerScore = 0;
let computerScore = 0;
let playerSelection = '';

startBtn.addEventListener('click', () => {
  textDisplay.textContent = "Let the battle begin! Rock, Paper or Scissors?";
  startBtn.style.display = 'none';
  game();
});

rock.addEventListener('click', () => {
  playerSelection = 'rock'
  game();
});

paper.addEventListener('click', () => {
  playerSelection = 'paper'
  game();
});

scissors.addEventListener('click', () => {
  playerSelection = 'scissors'
  game();
});


if (playerScore === 3) {
  textDisplay.textContent = "Congratulations! You won the game!";
} else if (computerScore === 3) {
  textDisplay.textContent = "Sorry, you lost the game!";
}


function computerPlay() {
  const play = ["rock", "paper", "scissors"];
  const randomValue = list => list[Math.floor(Math.random() * list.length)];
  
  
  return randomValue(play);
}

function game() {
  let computerSelection = computerPlay();
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      textDisplay.textContent = "Tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      textDisplay.textContent = "You win! Rock beats Scissors.";
      playerScore++;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      textDisplay.textContent = "You lose! Paper beats Rock.";
      computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      textDisplay.textContent = "You win! Paper beats Rock.";
      playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      textDisplay.textContent = "You lose! Scissors beats Paper.";
      computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      textDisplay.textContent = "You win! Scissors beats Paper.";
      playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      textDisplay.textContent = "You lose! Rock beats Scissors.";
      computerScore++;
    } 
  }

  console.log(playerSelection);
  
  playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
}


