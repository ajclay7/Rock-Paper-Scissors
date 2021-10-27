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
        return "It's a tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
     ) {
        return `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
    }

}

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log("Player: " + capitalize(playerSelection))
console.log("Computer: " + capitalize(computerSelection))
console.log(playRound(playerSelection, computerSelection));