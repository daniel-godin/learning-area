// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors#assignment

// Function to randomly return either 'Rock', 'Paper', or 'Scissors' for Computer.
function getComputerChoice() {
    let gameArray = ['Rock', 'Paper', 'Scissors'];  
    return gameArray[Math.floor((Math.random() * gameArray.length))];
}

// Function to play Rock, Paper, Scissors 5 times.  Keep Track Of Number of Wins.  Display Number of Wins.  Use prompt() to get user input and verify it is one of the allowable answers.



function game() {

    let numberOfPlayerWins = 0;
    let numberOfComputerWins = 0;

    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice(); 
        let playerSelection = playerInputVerification(); 

        // let playerSelection = prompt("Rock, Paper, or Scissors?", "").toLowerCase();
        // playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

        playRound(playerSelection, computerSelection);

        if (playRound(playerSelection, computerSelection) === `playerWinsRound`) {
            ++numberOfPlayerWins;
            console.log(`You won this round!  ${playerSelection} beats ${computerSelection}.`)
        } else if (playRound(playerSelection, computerSelection) === `tieRound`) {
            console.log(`You tied this round.  You both chose ${playerSelection}.`); 
        } else {
            ++numberOfComputerWins;
            console.log(`You lose this round.  ${computerSelection} beats ${playerSelection}.`);
        }
        
        console.log(`Score: P${numberOfPlayerWins} vs. C${numberOfComputerWins}.`);
    }

    function checkScoreFunction(numberOfPlayerWins, numberOfComputerWins) {
        if (numberOfPlayerWins > numberOfComputerWins) {
            return `You win the game!  Player Score:${numberOfPlayerWins} vs. Computer Score:${numberOfComputerWins}.`;
        } else if (numberOfComputerWins > numberOfPlayerWins) {
            return `You lose the game.  Computer Score:${numberOfComputerWins} vs. Player Score:${numberOfPlayerWins}.`;
        } else {
            return `Tie Game!  Try Again!  Player Score:${numberOfPlayerWins} vs. Computer Score:${numberOfComputerWins}.`;
        }
    }

    console.log(checkScoreFunction(numberOfPlayerWins, numberOfComputerWins));
}

function playerInputVerification () {
    
    
    let playerSelection = prompt("Rock, Paper, or Scissors?", "").toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    // Get input from user with prompt().
    // Check if input matches one of the acceptedAnswers array values.
    // If it does match, return that value
    // If it does not match, do another prompt() until it does, or you have 
    const acceptedAnswers = ["Rock", "Paper", "Scissors"];
    
// ------------ Need To Fix This Part.  The Verification Isn't Working As I Want -----------

    if (acceptedAnswers.includes(playerSelection)) {
        return playerSelection;
    } else {
        let playerSelection = prompt("Rock, Paper, or Scissors?", "").toLowerCase();
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    }
}

// Function to play a single round of the game Rock, Paper, Scissors.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {
            return `playerWinsRound`;
            // return `You Win! ${playerSelection} beats ${computerSelection}. Wins: Player(${numberOfPlayerWins}), Computer(${numberOfComputerWins}).`; 
    } else if (playerSelection === computerSelection) {
            return `tieRound`;
            // return `You Tied! You Both Chose ${playerSelection}. Wins: Player(${numberOfPlayerWins}), Computer(${numberOfComputerWins}).`; 
    } else {
            return `computerWinsRound`;
            // return `You Lose. ${computerSelection} beats ${playerSelection}. Wins: Player(${numberOfPlayerWins}), Computer(${numberOfComputerWins}).`;
    }
}