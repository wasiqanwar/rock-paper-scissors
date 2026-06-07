const getComputerChoice = () => {
	const rand = Math.random();
	if (rand < 0.33) return "rock";
	else if (rand < 0.66) return "paper";
	else return "scissors";
};

// console.log(getComputerChoice());

const getHumanChoice = () => {
	const inp = prompt("Do you want to choose rock, paper or scissors?");
	return inp.toLowerCase();
};

const playGame = () => {
	let humanScore = 0;
	let computerScore = 0;

	const playRound = (computerChoice, humanChoice) => {
		if (computerChoice === humanChoice) {
			console.log("It's a draw!");
		} else if (computerChoice === "rock" && humanChoice === "paper") {
			humanScore++;
			console.log("You win! Paper beats Rock");
		} else if (computerChoice === "paper" && humanChoice === "rock") {
			computerScore++;
			console.log("You lose! Paper beats Rock");
		} else if (computerChoice === "rock" && humanChoice === "scissors") {
			computerScore++;
			console.log("You lose! Rock beats Scissors");
		} else if (computerChoice === "scissors" && humanChoice === "rock") {
			humanScore++;
			console.log("You win! Rock beats Scissors");
		} else if (computerChoice === "paper" && humanChoice === "scissors") {
			humanScore++;
			console.log("You win! Scissors beat Paper");
		} else if (computerChoice === "scissors" && humanChoice === "paper") {
			computerScore++;
			console.log("You lose! Scissors beat Paper");
		}
	};

	for (let a = 0; a < 5; a++) {
		playRound(getComputerChoice(), getHumanChoice());
	}

	console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);

	if (humanScore > computerScore) console.log("You are the winner!");
	else if (humanScore < computerScore) console.log("You are the loser!");
	else if (humanScore === computerScore) console.log("The game is a draw!!");
};

playGame();
