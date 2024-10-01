console.log("Hello world");

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper, Scissors, which one is your choice?");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    const res = document.querySelector("#result");
    if ((humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissors")) {
        res.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        return "You_win";
    } else if ((computerChoice === "scissors" && humanChoice === "paper") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "rock" && humanChoice === "scissors")) {
        res.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        return "You_lose";
    } else {
        res.textContent = "You drew!";
        return "You_drew";
    }
}

let humanScore = 0;
let computerScore = 0;

function updateScore() {
    const hS = document.querySelector("#human-score");
    hS.textContent = humanScore;
    const cS = document.querySelector("#computer-score");
    cS.textContent = computerScore;
}

function startAgain() {
    humanScore = 0;
    computerScore = 0;
    updateScore();
}

function playGame(humanSelection) {

    const computerSelection = getComputerChoice();

    const result = playRound(humanSelection, computerSelection);
    if (result === "You_win") {
        humanScore++;
    } else if (result === "You_lose") {
        computerScore++;
    } 

    updateScore();

    if (humanScore >= 5) {
        alert("You win the game!");
        startAgain();
    } else if (computerScore >= 5) {
        alert("Computer win the game!");
        startAgain();
    }

}
