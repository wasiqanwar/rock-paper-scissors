let humanScore = 0;
let computerScore = 0;
let turn = 1;
let resultAnnounced = false;
const drawColor = "#a0a0a0";
const winColor = "#75ca72";
const loseColor = "#ca6969";

const buttons = document.querySelector("#btns");

const getComputerChoice = () => {
	const rand = Math.random();
	if (rand < 0.33) return "rock";
	else if (rand < 0.66) return "paper";
	else return "scissors";
};

const playGame = (e) => {
	if (e.target.tagName !== "BUTTON") return;

	if (humanScore < 5 && computerScore < 5) {
		const humanChoice = e.target.value;

		const playRound = (computerChoice) => {
			const row = document.createElement("tr");

			const cell1 = document.createElement("td");
			cell1.textContent = turn;
			turn++;

			const cell2 = document.createElement("td");
			cell2.textContent = humanChoice.toUpperCase();

			const cell3 = document.createElement("td");
			cell3.textContent = computerChoice.toUpperCase();

			const cell4 = document.createElement("td");
			const humanScoreCard = document.querySelector("#humanScore");
			const computerScoreCard = document.querySelector("#computerScore");

			if (computerChoice === humanChoice) {
				cell2.style.backgroundColor = drawColor;
				cell3.style.backgroundColor = drawColor;
				cell4.textContent = "DRAW";
			} else if (computerChoice === "rock" && humanChoice === "paper") {
				cell2.style.backgroundColor = winColor;
				cell3.style.backgroundColor = loseColor;
				cell4.textContent = "HUMAN";
				humanScore++;
				humanScoreCard.textContent = Number(humanScoreCard.textContent) + 1;
			} else if (computerChoice === "paper" && humanChoice === "rock") {
				cell2.style.backgroundColor = loseColor;
				cell3.style.backgroundColor = winColor;
				cell4.textContent = "COMPUTER";
				computerScore++;
				computerScoreCard.textContent =
					Number(computerScoreCard.textContent) + 1;
			} else if (computerChoice === "rock" && humanChoice === "scissors") {
				cell2.style.backgroundColor = loseColor;
				cell3.style.backgroundColor = winColor;
				cell4.textContent = "COMPUTER";
				computerScore++;
				computerScoreCard.textContent =
					Number(computerScoreCard.textContent) + 1;
			} else if (computerChoice === "scissors" && humanChoice === "rock") {
				cell2.style.backgroundColor = winColor;
				cell3.style.backgroundColor = loseColor;
				cell4.textContent = "HUMAN";
				humanScore++;
				humanScoreCard.textContent = Number(humanScoreCard.textContent) + 1;
			} else if (computerChoice === "paper" && humanChoice === "scissors") {
				cell2.style.backgroundColor = winColor;
				cell3.style.backgroundColor = loseColor;
				cell4.textContent = "HUMAN";
				humanScore++;
				humanScoreCard.textContent = Number(humanScoreCard.textContent) + 1;
			} else if (computerChoice === "scissors" && humanChoice === "paper") {
				cell2.style.backgroundColor = loseColor;
				cell3.style.backgroundColor = winColor;
				cell4.textContent = "COMPUTER";
				computerScore++;
				computerScoreCard.textContent =
					Number(computerScoreCard.textContent) + 1;
			}

			row.appendChild(cell1);
			row.appendChild(cell2);
			row.appendChild(cell3);
			row.appendChild(cell4);

			const scoreTable = document.querySelector("table");
			scoreTable.appendChild(row);
		};

		playRound(getComputerChoice());
	}

	if ((humanScore >= 5 || computerScore >= 5) && !resultAnnounced) {
		const winner = document.querySelector("#winner");

		if (humanScore > computerScore) {
			winner.textContent = "YOU ARE THE WINNER!";
		} else if (humanScore < computerScore) {
			winner.textContent = "YOU ARE THE LOSER!";
		} else if (humanScore === computerScore) {
			winner.textContent = "THE GAME IS A DRAW!";
		}
		winner.style.fontWeight = "bold";
		resultAnnounced = true;
	}
};

buttons.addEventListener("click", playGame);

// playGame();
