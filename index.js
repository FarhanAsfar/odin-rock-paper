function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);

    const randomChoice = choices[randomIndex];

    return randomChoice;
}

function playRound(playerChoice, computerChoice){

    if(playerChoice == computerChoice){
        return 'Game Drawn';
    }
    else if(
        (playerChoice == 'rock' && computerChoice == 'scissor') ||
        (playerChoice == 'paper' && computerChoice == 'rock') ||
        (playerChoice == 'scissor' && computerChoice == 'paper')
        ){
            return 'You Won! '+ playerChoice + ' defeats ' + computerChoice;
        }
    else{
        return 'You Lose! '+ computerChoice + ' defeats ' + playerChoice;
    }
}



const playerChoice = 'scissor';
const computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));