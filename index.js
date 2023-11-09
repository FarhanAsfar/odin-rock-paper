function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);

    const randomChoice = choices[randomIndex];

    return randomChoice;
}

function playRound(playerChoice, computerChoice){
    if(playerChoice=='rock' && computerChoice=='paper'){
        return 'you lose';
    }
    else if(playerChoice=='rock' && computerChoice=='scissor'){
        return 'you won';
    }
    else if(playerChoice=='rock' && computerChoice=='rock'){
        return 'game draw';
    }
}



const playerChoice = 'rock';
const computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));