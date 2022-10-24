// Function to randomly return either 'Rock', 'Paper', or 'Scissors' for Computer.
function getComputerChoice() {
    let gameArray = ['rock', 'paper', 'scissors'];  
    return gameArray[Math.floor((Math.random() * gameArray.length))];
}


// Player inputs either: Rock, Paper, or Scissors
// Use JS prompt() function and store this as a variable for use in the game().


const getPlayerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();


// array of "accepted" answers.
const acceptedAnswers = ["rock", "paper", "scissors"];


// verification of player input.
// Checking array of accepted values against the player selection.
// NEXT:  accepted answer should make the game run.  Not accept should prompt again to make player choose the 3 choices.
if (acceptedAnswers.includes(getPlayerSelection)) {
    console.log("Input Works");
} else {
    console.log("Input Does Not Work");
}






// How to make sure the user writes "rock", "paper", or "scissors"?
// Use if/else if?
// if getPlayerSelectoin == "rock", "paper", or "scissors" run playRound() Function
// if getPlayerSelection != "rock" or "paper" or "scissors" prompt("Please select Rock, Paper, or Scissors");
// If the user doesn't write out one of the three choices, then the prompt should change and ask the question "Please select Rock, Paper, or Scissors"





// Function to play Rock, Paper, Scissors Once.
// Function needs to have a player select Rock, Paper, or Scissors (case-insensitive)
// Then Function needs to grab getComputerChoice()
// Then Function needs to evaluate playerChoice vs. ComputerChoice
// Function should return winner with string "You (Win/Lose), (Winner Selection) beats (Loser Selection)"

// function playRound(playerSelection, computerSelection) {

// }