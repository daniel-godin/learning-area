// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors#assignment

// Function which asks player to choose "Rock, Paper, or Scissors" with JS prompt() call.  This function also makes the answer case-insensitive, and also verifies that it is one of three acceptable answers.
function getPlayerSelection() {
    // Array of "accepted" answers.
    const acceptedAnswers = ["rock", "paper", "scissors"];

    // Player inputs either: Rock, Paper, or Scissors and toLowerCase() makes it case-insensitive.
    let playerSelection = prompt("Rock, Paper, or Scissors?", "").toLowerCase();

    // Verification of player input.  
    // Checking player selection against accepted values in array.
    // Then makes selection's first letter capitalized.
    if (acceptedAnswers.includes(playerSelection)) {
        let str = playerSelection;
        let capatalizedAnswer = str.charAt(0).toUpperCase() + str.slice(1);
        return capatalizedAnswer;
    } else {
    // Accepted answer should make the game run.  Not accept should prompt again to make player choose the 3 choices.
    return "Input misspelled";
}
}

// Function to randomly return either 'Rock', 'Paper', or 'Scissors' for Computer.
function getComputerChoice() {
    let gameArray = ['Rock', 'Paper', 'Scissors'];  
    return gameArray[Math.floor((Math.random() * gameArray.length))];
}

numberOfPlayerWins = 0;
numberOfComputerWins = 0;

// Function to play a single round of the game Rock, Paper, Scissors.
function playRound (playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors" || 
    playerSelection === "Paper" && computerSelection === "Rock" ||
    playerSelection === "Scissors" && computerSelection === "Paper") {
        ++numberOfPlayerWins;
        return `You Win! ${playerSelection} beats ${computerSelection} You:${numberOfPlayerWins}, Computer:${numberOfComputerWins}`; 
    } else if (playerSelection === computerSelection) {
        return `You Tied! You both selected ${playerSelection}`; 
    } else {
        ++numberOfComputerWins;
        return `You Lose. ${computerSelection} beats ${playerSelection}`;
    }
}

let playerSelection = getPlayerSelection();
let computerSelection = getComputerChoice();
console.log(playerSelection); // Checking player selection.
console.log(computerSelection); // Checking computer selection.

// console.log(playRound(playerSelection, computerSelection));

console.log(`Player Wins: ${numberOfPlayerWins}`);
console.log(`Computer Wins: ${numberOfComputerWins}`);

// Thoughts: TOP suggests using a for loop.  Need to brush up on this.
// Need to run the game 5 times then call it over.  Also need to display the winner overall. Hmmm.

// Function to play "Rock, Paper, Scissors" Game 5 Times and report winner.

for (let i = 0; i < 5; i++) {
    function game() {
        console.log(playRound(playerSelection, computerSelection));
    }
        
    }


console.log(game());