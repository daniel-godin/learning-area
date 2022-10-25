// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors#assignment
// Function to randomly return either 'Rock', 'Paper', or 'Scissors' for Computer.
function getComputerChoice() {
    let gameArray = ['Rock', 'Paper', 'Scissors'];  
    return gameArray[Math.floor((Math.random() * gameArray.length))];
}


// Function which asks player to choose "Rock, Paper, or Scissors" with JS prompt() call.  This function also makes the answer case-insensitive, and also verifies that it is one of three acceptable answers.
function getPlayerSelection() {
    // array of "accepted" answers.
    const acceptedAnswers = ["rock", "paper", "scissors"];

    // Player inputs either: Rock, Paper, or Scissors and toLowerCase() makes it case-insensitive.
    let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

    // verification of player input.  Checking array of accepted values against the player selection.  Then makes selection's first letter capitalized.
    if (acceptedAnswers.includes(playerSelection)) {
        let str = playerSelection;
        let capatalizedAnswer = str.charAt(0).toUpperCase() + str.slice(1);
        return capatalizedAnswer;
    } else {
    // Accepted answer should make the game run.  Not accept should prompt again to make player choose the 3 choices.
    return "Input misspelled";
}
}

// Function to play a single round of the game Rock, Paper, Scissors.

// function playRound (playerSelection, computerSelection) {
//     if (playerSelection === "Rock" && computerSelection === "Scissors" || 
//     playerSelection === "Paper" && computerSelection === "Rock" ||
//     playerSelection === "Scissors" && computerSelection === "Paper") {
//         return `You Win! ${playerSelection} beats ${computerSelection}`; 
//     } else if (playerSelection === computerSelection) {
//         return `You Tied! You both selected ${playerSelection}`; 
//     } else {
//         return `You Lose. ${computerSelection} beats ${playerSelection}`;
//     }
// }

// let computerSelection = getComputerChoice();
// let playerSelection = getPlayerSelection();
// console.log(computerSelection);
// console.log(playerSelection);
// console.log(playRound(playerSelection, computerSelection));


// Function to play Rock Paper Scissors 5 times.
// Should keep score and report winner or loser at the end.

// Thoughts: TOP suggests using a for loop.  Need to brush up on this.
// Need to run the game 5 times then call it over.  Also need to display the winner overall. Hmmm.

function game() {
    for (let i = 0; i < 5, i++) {
        if (i < 2) {
            playRound();
        } else {
            return console.log("Game Over");
        }


        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerSelection();
        console.log(computerSelection);
        console.log(playerSelection);
        console.log(playRound(playerSelection, computerSelection));

        function playRound(playerSelection, computerSelection) {
            if (playerSelection === "Rock" && computerSelection === "Scissors" || 
            playerSelection === "Paper" && computerSelection === "Rock" ||
            playerSelection === "Scissors" && computerSelection === "Paper") {
                return `You Win! ${playerSelection} beats ${computerSelection}`; 
            } else if (playerSelection === computerSelection) {
                return `You Tied! You both selected ${playerSelection}`; 
            } else {
                return `You Lose. ${computerSelection} beats ${playerSelection}`;
            }
        }
    }
}