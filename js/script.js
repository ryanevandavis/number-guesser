let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Generate a random number:
const generateTarget = () => {
    return Math.floor(Math.random() * 9);
};

// This is the OG answer
// Compare guesses and then yeild true for human wins (draws count as human win) 
/*const compareGuesses = (human, computer, target) => {
    const humanDifference = Math.abs(target - human);
    const computerDifference = Math.abs(target - computer);
    if (humanDifference <= computerDifference) {
        return true;
    } else if (computerDifference < humanDifference) {
        return false;
    } 
};*/
// This is extended edition + simplified on the if statement
const getAbsoluteDistance = (guess, target) => {
    return Math.abs(target - guess);
  };
  
const compareGuesses = (human, computer, target) => {
    // Check if the human guess is out of range (not between 0 and 9)
    if (human < 0 || human > 9) {
    alert("Your guess is out of range! Please enter a number between 0 and 9.");
    return false;
    }
    // Grab the absolute distance
    const humanDifference = getAbsoluteDistance(human, target);
    const computerDifference = getAbsoluteDistance(computer, target);
    // Check if the who won
    if (humanDifference <= computerDifference) {
      return true;
    } else {
      return false;
    }
  };


// updates little score at top based on who won
const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
};


// lets the round move on to the next
const advanceRound = () => {
    currentRoundNumber += 1;
};