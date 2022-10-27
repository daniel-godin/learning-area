// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors#assignment

// Function to randomly return either 'Rock', 'Paper', or 'Scissors' for Computer.
function getComputerChoice() {
    let gameArray = ['Rock', 'Paper', 'Scissors'];  
    return gameArray[Math.floor((Math.random() * gameArray.length))];
}

// Function to play Rock, Paper, Scissors 5 times.  Keep Track Of Number of Wins.  Display Number of Wins.  Use prompt() to get user input and verify it is one of the allowable answers.



function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?", "");
        let computerSelection = getComputerChoice();  
        console.log(playRound(playerSelection, computerSelection));

    }
}
// Function to play a single round of the game Rock, Paper, Scissors.
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    
    if (playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {
            return `You Win! ${playerSelection} beats ${computerSelection}.`; 
    } else if (playerSelection === computerSelection) {
            return `You Tied! You Both Chose ${playerSelection}.`; 
    } else {
            return `You Lose. ${computerSelection} beats ${playerSelection}.`;
    }
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));


// Function which asks player to choose "Rock, Paper, or Scissors" with JS prompt() call.  This function also makes the answer case-insensitive, and also verifies that it is one of three acceptable answers.
// function getPlayerChoice() {
//     // Array of "accepted" answers.
//     const acceptedAnswers = ["rock", "paper", "scissors"];

//     // Player inputs either: Rock, Paper, or Scissors and toLowerCase() makes it case-insensitive.
//     let playerChoiceAnswer = prompt("Rock, Paper, or Scissors?", "").toLowerCase();

//     // Verification of player input.  
//     // Checking player choice against accepted values in array.
//     // Then makes choice's first letter capitalized.
//     if (acceptedAnswers.includes(playerChoiceAnswer)) {
//         let str = playerChoiceAnswer;
//         let capatalizedAnswer = str.charAt(0).toUpperCase() + str.slice(1);
//         return capatalizedAnswer;
//     } else {
//     // Accepted answer should make the game run.  Not accept should prompt again to make player choose the 3 choices.
//     return "Input misspelled";
// }
// }

//     const acceptedAnswers = ["Rock", "Paper", "Scissors"];
// if (acceptedAnswers.includes(playerSelection)) {







// Function to play "Rock, Paper, Scissors" Game 5 Times and report winner.
// Thoughts: TOP suggests using a for loop.  Need to brush up on this.
// Need to run the game 5 times then call it over.  Also need to display the winner overall. Hmmm.



// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound(); // Function which plays 1 round of the game.

//         // getPlayerChoice(); // Function which prompts player for choice.
//         // getComputerChoice(); // Function which randomly chooses for computer.

//         let playerChoice = getPlayerChoice(); // Making playerChoice variable from the return of getPlayerChoice() function.
//         let computerChoice = getComputerChoice(); // Making computerChoice variable from the return of getComputerChoice() function.

//         return `Player Choice:  ${playerChoice}.  Computer Choice:  ${computerChoice}.` // Returns values of player and computer.

//         // numberOfPlayerWins = 0; // Variable for players wins that starts at 0.
//         // ++numberOfPlayerWins;
//         // numberOfComputerWins = 0; // Variable for computer wins that starts at 0.
//         // ++numberOfComputerWins
//         // console.log(`Player Wins: ${numberOfPlayerWins}`); // Console Test to see if wins are calculating.
//         // console.log(`Computer Wins: ${numberOfComputerWins}`); // Console Test to see if wins are calculating.
//     }
// }

// console.log(game());

