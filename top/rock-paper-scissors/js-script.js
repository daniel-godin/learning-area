// Randomly return either 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let gameArray = ['Rock', 'Paper', 'Scissors'];
    // let randomChoice = Math.floor((Math.random() * gameArray.length));   
    return gameArray[Math.floor((Math.random() * gameArray.length))];
}
console.log(getComputerChoice());