const mainBtn = document.querySelector('.main-btn');
const playAgain = document.querySelector('.main-btn.-play-again')
const textDisplay = document.querySelector('#text-display')
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const gameChoices = document.querySelector('.game-choices');
let userScore = document.querySelector('#user-score');
let compScore = document.querySelector('#comp-score');

let playerScore = 0;
let computerScore = 0;
let playerSelection = '';

mainBtn.addEventListener('click', () => {
  textDisplay.textContent = "Let the battle begin! Rock, Paper or Scissors?";
  mainBtn.style.display = 'none';

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

  playAgain.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    userScore.textContent = 0;
    compScore.textContent = 0;
    gameChoices.style.display = "flex";
    playAgain.style.display = "none";

    textDisplay.textContent = "Let the battle begin! Rock, Paper or Scissors?";
  });
});

function game() {
  function computerPlay() {
    const play = ["rock", "paper", "scissors"];
    const randomValue = list => list[Math.floor(Math.random() * list.length)];
    
    return randomValue(play);
  }
  
  computerSelection = computerPlay();

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

    userScore.textContent = `${playerScore}`;
    compScore.textContent = `${computerScore}`;
  }
  
  
  playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());

  if (playerScore === 3) {
    textDisplay.textContent = "Congratulations! You won the game!";
    gameChoices.style.display = "none";
    playAgain.style.display = "initial";
  } else if (computerScore === 3) {
    textDisplay.textContent = "Sorry, you lost the game!";
    gameChoices.style.display = "none";
    playAgain.style.display = "initial";
  }
}
