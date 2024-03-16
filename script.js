const roundNumberField = document.getElementById("roundNumber");
const computerChoiceField = document.getElementById("computerChoice");
const playerChoiceField = document.getElementById("playerChoice");


const roundNumber = parseInt(prompt("Rounds You Want To Play", 3));

roundNumberField.textContent = "1";

function playRound(playerChoice){
    playerChoiceField.textContent = playerChoice;
    const computerChoice = getComputerChoice();
    computerChoiceField.textContent = computerChoice;
    // call function to calculate round result
}

// write function to calculate round result
// function getRoundResult(playerChoice, computerChoice){

// }

function getComputerChoice(){
    const computerChoices = ["rock", "paper", "scissor"];
    const computerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    return computerChoice;
}