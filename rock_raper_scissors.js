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

    if ((humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissors")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "You_win";
    } else if ((computerChoice === "scissors" && humanChoice === "paper") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "rock" && humanChoice === "scissors")) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return "You_lose";
    } else {
        console.log("You drew!");
        return "You_drew";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const result = playRound(humanSelection, computerSelection);
        if (result === "You_win") {
            humanScore++;
        } else if (result === "You_lose") {
            computerScore++;
        } 
    }

    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

playGame()