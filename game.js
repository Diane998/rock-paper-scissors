
myArray = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    randomPlay =  myArray[Math.floor(Math.random()*myArray.length)];

    if (randomPlay == "Rock") {
        computerHand.src = "images/rock2.png";
        return "Rock";
    } else if (randomPlay == "Paper") {
        computerHand.src = "images/paper2.png";
        return "Paper";
    } else if (randomPlay == "Scissors") {
        computerHand.src = "images/scissors2.png";
        return "Scissors";
    }
};

const computerHand = document.getElementById("computer's hand");

let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');

let playerStartingScore = 0;
let computerStaringScore = 0;
let pScore;
let cScore;
let result = document.getElementById("result");

let roundWinner = document.getElementById("round-winner");

const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");

rock.addEventListener("click", function() {
    playRound(this.id, computerPlay());
    changeToRock();
});

paper.addEventListener("click", function() {
    playRound(this.id, computerPlay());
    changeToPaper();
});

scissors.addEventListener("click", function() {
    playRound(this.id, computerPlay());
    changeToScissors();
});

function changeToRock() {
    const playerHand = document.getElementById("player's hand");
    playerHand.src = "images/rock1.png";
};

function changeToPaper() {
    const playerHand = document.getElementById("player's hand");
    playerHand.src = "images/paper1.png";
};

function changeToScissors() {
    const playerHand = document.getElementById("player's hand");
    playerHand.src = "images/scissors1.png";
};

let playRound = (playerSelection, computerSelection) => {

    const playerVsComputer = playerSelection + computerSelection;
    switch (playerVsComputer) {
        case "PaperRock":
        case "RockScissors":
        case "ScissorsPaper":
            pScore = parseInt(playerStartingScore += 1);
            playerScore.textContent = pScore;
            result.textContent = playerSelection + " beats " + computerSelection
                    + ". You Win!"; 
            break;
        case "PaperScissors":
        case "ScissorsRock":
        case "RockPaper":
            cScore = parseInt(computerStaringScore += 1);
            computerScore.textContent = cScore;
            result.textContent = computerSelection + " beats " + playerSelection
                    + ". Computer Wins!";
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            result.textContent = playerSelection + " Vs " + computerSelection
                    + ". Draw";
            break; 
    }

    if (pScore == 5) {
        roundWinner.textContent = "You won this round!";
    } else if (cScore == 5) {
        roundWinner.textContent = "Computer won this round!";
    }
};

const reset = document.getElementById('reset-button');
reset.addEventListener('click', resetGame);

function resetGame() {
    playerStartingScore = 0;
    computerStaringScore = 0;
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    roundWinner.innerHTML = "";
};