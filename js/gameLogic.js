export const getUserChoice = (userInput) => { ... };
export const getComputerChoice = () => { ... };
export const determineWinner = (userChoice, computerChoice) => { ... };


const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log("Error. Not a valid choice. Please select rock, paper, or scissors");
  }
};

const getComputerChoice = () => {
 let randomNum = Math.floor(Math.random() * 3);

 if (randomNum === 0) {
  return 'rock';
 } else if (randomNum === 1) {
  return 'paper';
 } else if (randomNum === 2) {
  return 'scissors';
 } else {
  console.log("Error with randomNum generation");
 }
};

const determineWinner = (userChoice, computerChoice) => {

  if (userChoice === 'bomb') {
    return "user wins";
  }

  if (userChoice === computerChoice) {
    return "tie";
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return "user wins";
    } else {
      return "computer wins";
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return "user wins";
    } else {
      return "computer wins";
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return "user wins";
    } else {
      return "computer wins";
    }
  }
};

//TESTING IT OUT:
  // Store user's choice
 // Store computer's choice
 // Now we're passing pre-stored values

const playGame = () => {
  const userChoice = getUserChoice('Bomb');
  const computerChoice = getComputerChoice(); 

  console.log(`User choice: ${userChoice}`);
  console.log(`Computer choice: ${computerChoice}`);

  console.log(determineWinner(userChoice,computerChoice));
};

playGame();
