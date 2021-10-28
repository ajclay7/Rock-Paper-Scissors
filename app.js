const computerPlay = () => {
    let options = ["Rock", "Paper", "Scissors"]
    pick = Math.floor(Math.random() * 3);

    let computerPick = options[pick];

    return computerPick;
}

const capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
     ) {
        return `player`
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        return `computer`
    }

}

const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        let playerSelection = prompt("Choose your weapon");
        let computerSelection = computerPlay();

        winner = playRound(playerSelection, computerSelection);

        if (winner === "player") {
            playerScore++;
            console.log(`You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
        } else if (winner === "computer") {
            computerScore++;
            console.log(`You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`);
        } else if (winner === "tie") {
            console.log("It's a tie");
        } else {
            console.log("Something went wrong here :( ");
        }

        console.log(`Score (Player: ${playerScore}) (Computer: ${computerScore})`);
    }

    if (playerScore === 5){
        console.log("Winnner Winner Chicken Dinner!")
    } else if (computerScore === 5) {
        console.log("You've lost! We are all doomed!")
    }
}

game();

// const playerSelection = "rock";
// const computerSelection = computerPlay();

// console.log("Player: " + capitalize(playerSelection))
// console.log("Computer: " + capitalize(computerSelection))
// console.log(playRound(playerSelection, computerSelection));