const playerInput = prompt("Your choice ( rock, paper, scissors) ?").toLowerCase()

function getPlayerChoice (playerInput) {
    
    if (playerInput === 'rock' || playerInput === 'paper' || playerInput ==='scissors') {
        return playerInput
    } else {
        console.log("Entrez le bon nom!");
    }
    
}

function getComputerChoice () {
    const computerChoice = Math.floor(Math.random() * 3)
    // console.log(computerChoice)
    
    if (computerChoice === 0){
        return "rock"
    } else if (computerChoice ===1){
        return "paper"
    } else {
        return "scissors"
    }
}


function findWinner (playerChoice, computerChoice) {

    if(computerChoice === playerChoice){
        console.log("egalite");
    }else if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock" ) ||
        (playerChoice == "scissors" && computerChoice == "paper")   
        ){
        console.log(" win")
    }
    else{
        console.log("lost")
    }        
   
}

function playGame (){
    const uChoice = getPlayerChoice(playerInput)
    const computerChoice = getComputerChoice()
    findWinner(uChoice, computerChoice)
    console.log("choix computer", computerChoice)
    console.log("choix utilisateur", uChoice)
}

playGame()

// console.log('exo-3');