// Rock, Paper, Scissors: Refactored with Functions
const initGame = () => {
  const startGame = confirm("Shall we play rock, paper, scissors?");
  startGame ? playGame() : alert("Okay, maybe next time.");
};

// Game flow function
const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decidedNotToPlay();
      break;
    }
    playerChoice = evaluatePlayerChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice();
      continue;
    }
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);
    if (askToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
};

const getPlayerChoice = () => {
  return prompt("Please enter rock, paper, or scissors.");
};

const formatPlayerChoice = (playerChoice) => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  } else {
    return false;
  }
};

const invalidChoice = () => {
  alert("You didn't enter rock, paper, scissors.");
};

const decidedNotToPlay = () => {
  alert("I guess you chaged your mind. Maybe next time.");
};

const evaluatePlayerChoice = (playerChoice) => {
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    return false;
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[randomNumber];
};

const determineWinner = (player, computer) => {
  const winner =
    player === computer
      ? `PlayerOne: ${player}\nComputer: ${computer}\nTie Game!`
      : player === "rock" && computer === "paper"
      ? `PlayerOne: ${player}\nComputer: ${computer}\nComputer Wins!`
      : player === "paper" && computer === "scissors"
      ? `PlayerOne: ${player}\nComputer: ${computer}\nComputer Wins!`
      : player === "scissors" && computer === "rock"
      ? `PlayerOne: ${player}\nComputer: ${computer}\nComputer Wins!`
      : `PlayerOne: ${player}\nComputer: ${computer}\nPlayer Wins!`;
  return winner;
};

const displayResult = (result) => {
  alert(result);
};

const askToPlayAgain = () => {
  return confirm("Play Again?");
};

const thanksForPlaying = () => {
  alert("Okay, thanks for playing.");
};

initGame();
