const roundNumberField = document.getElementById("roundNumber");
const computerChoiceField = document.getElementById("computerChoice");
const playerChoiceField = document.getElementById("playerChoice");
const roundResultField = document.getElementById("roundResult");
const playerScoreField = document.getElementById("playerScore");
const computerScoreField = document.getElementById("computerScore");
const gameResultField = document.getElementById("gameResult");
const playerOptions = document.getElementById("playerOptions");
const playAgainBtn = document.getElementById("playAgainBtn");

let currentRound;
let playerScore;
let computerScore;
let totalRounds;

function resetGame(){
    totalRounds = parseInt(prompt("Rounds You Want To Play", 3));
    currentRound = 1;
    playerScore = 0;
    computerScore = 0;
    roundNumberField.textContent = currentRound;
    playerScoreField.textContent = playerScore;
    computerScoreField.textContent = computerScore;
    gameResultField.textContent = "";
    playerOptions.style.pointerEvents = "auto";
    playAgainBtn.style.display = "none";
}

resetGame();

function playRound(playerChoice){
    playerChoiceField.textContent = playerChoice;
    const computerChoice = getComputerChoice();
    computerChoiceField.textContent = computerChoice;
    // call function to calculate round result
    const roundResult = getRoundResult(playerChoice, computerChoice);
    roundResultField.textContent = roundResult;
    if (isGameOver()){
        gameResultField.textContent = getGameResult();
        playAgainBtn.style.display = "inline-block";
        playerOptions.style.pointerEvents = "none";
        return;
    }
    updateRound();
}

function getGameResult(){
    if(playerScore === computerScore){
        return ("Game Tied")
    }
    else if(playerScore > computerScore){
        return ("You Won The Game!")
    }
    else{
        return ("You Lost The Game!")
    }
}

function updateRound(){
    currentRound++;
    roundNumberField.textContent = currentRound;
}

function isGameOver(){
    if(currentRound === totalRounds){
        return true;
    }
    return false;    
}

// write function to calculate round result
function getRoundResult(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return ("It's a Tieee!!!");    
    }
    else if((playerChoice === "Rock" && computerChoice === "Scissor") || 
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissor" && computerChoice === "Paper")){
            playerScoreField.textContent = ++playerScore;
            return `You Win!!! ${playerChoice} beats ${computerChoice}`;
        }
    else{
        computerScoreField.textContent = ++computerScore;
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
}

function getComputerChoice(){
    const computerChoices = ["Rock", "Paper", "Scissor"];
    const computerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    return computerChoice;
}