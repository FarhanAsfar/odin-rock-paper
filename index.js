

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * words.length);

    const randomChoice = words[randomChoice];

    return randomChoice;
}

const playerChoice = 'rock';
const computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));