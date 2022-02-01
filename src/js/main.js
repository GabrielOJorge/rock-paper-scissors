const mainBtn = document.querySelector('.main-btn');
const playAgain = document.querySelector('.main-btn.-play-again')
const textDisplay = document.querySelector('#text-display')
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const gameChoices = document.querySelector('.game-choices');
const choicesBtn = document.querySelectorAll('.far');
const rock = document.querySelector('.fa-hand-rock');
const paper = document.querySelector('.fa-hand-paper');
const scissors = document.querySelector('.fa-hand-scissors');
let userScore = document.querySelector('#user-score');
let compScore = document.querySelector('#comp-score');

let playerScore = 0;
let computerScore = 0;
let playerSelection = '';

mainBtn.addEventListener('click', () => {
  textDisplay.textContent = "Let the battle begin!";
  mainBtn.style.display = 'none';

  choicesBtn.forEach(choice => {
    choice.addEventListener("click", () => {
      rock.classList.remove("active");
      paper.classList.remove("active");
      scissors.classList.remove("active");
      choice.classList.toggle("active");
    });
  });

  rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
    game();
  });
  
  paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    game();
  });
  
  scissorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors';
    game();
  });

  playAgain.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    userScore.textContent = 0;
    compScore.textContent = 0;
    gameChoices.style.display = "flex";
    playAgain.style.display = "none";

    rock.classList.remove("active");
    paper.classList.remove("active");
    scissors.classList.remove("active");
    textDisplay.textContent = "Let the battle begin!";

  });
});

function computerPlay() {
  const play = ["rock", "paper", "scissors"];
  const randomValue = list => list[Math.floor(Math.random() * list.length)];
  
  return randomValue(play);
}

function game() {
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
