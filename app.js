let playerScore = 0;
let computerScore = 0;
let playing = true;

document.addEventListener('DOMContentLoaded', function (event) {
	const computerPlay = () => {
		let options = ['Rock', 'Paper', 'Scissors'];
		pick = Math.floor(Math.random() * 3);

		let computerPick = options[pick];

		return computerPick;
	};

	const capitalize = (str) => {
		return str[0].toUpperCase() + str.slice(1);
	};

	const playRound = (playerSelection, computerSelection) => {
		playerSelection = playerSelection.toLowerCase();
		computerSelection = computerSelection.toLowerCase();

		if (playerSelection === computerSelection) {
			return 'tie';
		} else if (
			(playerSelection === 'rock' && computerSelection === 'scissors') ||
			(playerSelection === 'paper' && computerSelection === 'rock') ||
			(playerSelection === 'scissors' && computerSelection === 'paper')
		) {
			return `player`;
		} else if (
			(playerSelection === 'rock' && computerSelection === 'paper') ||
			(playerSelection === 'paper' && computerSelection === 'scissors') ||
			(playerSelection === 'scissors' && computerSelection === 'rock')
		) {
			return `computer`;
		}
	};

	const updateScore = (playerSelection, computerSelection, winner) => {
		let scoreInfo = document.querySelector('#scoreInfo');
		let playerScoreDisplay = document.querySelector('.player-score');
		let computerScoreDisplay = document.querySelector('.computer-score');
		let playerIcon = document.querySelector('.player-icon');
		let computerIcon = document.querySelector('.computer-icon');

		playerIcon.innerHTML = `<i class="fas fa-hand-${playerSelection.toLowerCase()}"></i>`;
		computerIcon.innerHTML = `<i class="fas fa-hand-${computerSelection.toLowerCase()}"></i>`;

		if (winner === 'player') {
			++playerScore;
			console.log(
				`You Win! ${capitalize(playerSelection)} beats ${capitalize(
					computerSelection
				)}`
			);

			scoreInfo.innerHTML = `<span>You Win! ${capitalize(
				playerSelection
			)} beats ${capitalize(computerSelection)}</span>`;

			playerScoreDisplay.innerHTML = `${playerScore}`;
		} else if (winner === 'computer') {
			++computerScore;
			console.log(
				`You Lose! ${capitalize(computerSelection)} beats ${capitalize(
					playerSelection
				)}`
			);

			scoreInfo.innerHTML = `<span>You Lose! ${capitalize(
				computerSelection
			)} beats ${capitalize(playerSelection)}</span>`;

			computerScoreDisplay.innerHTML = `${computerScore}`;
		} else if (winner === 'tie') {
			console.log("It's a tie");
			scoreInfo.innerHTML = `It's a tie`;
		} else {
			console.log('Something went wrong here :( ');
		}

		console.log(`Score (Player: ${playerScore}) (Computer: ${computerScore})`);

		if (playerScore === 5) {
			console.log('Winnner Winner Chicken Dinner!');
			scoreInfo.innerHTML = `Winnner Winner Chicken Dinner!`;
			playing = false;
		} else if (computerScore === 5) {
			console.log("You've lost! We are all doomed!");
			scoreInfo.innerHTML = `You've lost! We are all doomed!"`;
			playing = false;
		}
	};

	const game = (playerSelection) => {
		let computerSelection = computerPlay();

		winner = playRound(playerSelection, computerSelection);
		updateScore(playerSelection, computerSelection, winner);
	};

	const reset = () => {
		playing = true;
		playerScore = 0;
		computerScore = 0;

		let scoreInfo = document.querySelector('#scoreInfo');
		let playerScoreDisplay = document.querySelector('.player-score');
		let computerScoreDisplay = document.querySelector('.computer-score');
		let playerIcon = document.querySelector('.player-icon');
		let computerIcon = document.querySelector('.computer-icon');

		scoreInfo.innerHTML = `Welcome!`;
		playerScoreDisplay.innerHTML = `${playerScore}`;
		computerScoreDisplay.innerHTML = `${computerScore}`;
		playerIcon.innerHTML = `<i class="fas fa-hand-rock"></i>`;
		computerIcon.innerHTML = `<i class="fas fa-hand-rock"></i>`;
	};

	const buttons = document.querySelectorAll('.btn');
	console.log(buttons);

	buttons.forEach((button) => {
		button.addEventListener('click', (e) => {
			let selection = e.currentTarget.getAttribute('id');

			console.log(selection);
			if (selection === 'reset') {
				reset();
			} else if (playing && selection != 'reset') {
				game(selection);
			}
		});
	});
});

// game();

// const playerSelection = "rock";
// const computerSelection = computerPlay();

// console.log("Player: " + capitalize(playerSelection))
// console.log("Computer: " + capitalize(computerSelection))
// console.log(playRound(playerSelection, computerSelection));
