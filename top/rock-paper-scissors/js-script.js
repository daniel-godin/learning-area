// Randomly return either 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let gameArray = ['rock', 'paper', 'scissors'];
    // let randomChoice = Math.floor((Math.random() * gameArray.length));   
    return gameArray[Math.floor((Math.random() * gameArray.length))];
}


// Player inputs either: Rock, Paper, or Scissors
// Should I do this in an HTML form, or as a console thing?
// First, console.
let getPlayerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

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