let humanScore = 0;
let computerScore = 0;

function getRandomNumber1to3(){
    const minNumber = Math.ceil(1);
    const maxNumber = Math.floor(3);
    return Math.floor(Math.random() * (maxNumber-minNumber + 1) + minNumber)
}

function getComputerChoice(){
    let randomNumber = getRandomNumber1to3();
    let computerChoice;
    
    if (randomNumber === 1){
        return computerChoice = "rock"
    } else if (randomNumber === 2){
        return computerChoice = "paper"
    }else if (randomNumber === 3) {
        return computerChoice = "scissors"  
    } 
}

function getHumanChoice(){  
    let humanChoice = prompt("What's your choice? \"rock\", \"paper\" or \"scissors\"");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "paper" || humanChoice === "rock" || humanChoice === "scissors"){
        return humanChoice
    }else {
        alert("Please, enter a valid choice");
        //humanChoice = null;
        return getHumanChoice()
    }
}

function playRound(humanChoice,computerChoice) {

    if (humanChoice === computerChoice) {
            return alert("It's a Tie");
    }else if ((humanChoice === "rock" || computerChoice === "rock") && (humanChoice === "paper" || computerChoice === "paper")) {
        if (humanChoice === "rock") {
            computerScore++;
            return alert("You lose! Paper beats Rock.");
        }else if (humanChoice === "paper") {
            humanScore++;
            return alert("You win! Paper beats Rock.");
        }
    } else if ((humanChoice === "rock" || computerChoice === "rock") && (humanChoice === "scissors" || computerChoice === "scissors")) {
        if (humanChoice === "scissors") {
            computerScore++;
            return alert("You lose! Rock beats Scissors.");
        }else if (humanChoice === "rock") {
            humanScore++;
            return alert("You win! Rock beats Scissors.");
        }
    } else if ((humanChoice === "paper" || computerChoice === "paper") && (humanChoice === "scissors" || computerChoice === "scissors")) {
        if (humanChoice === "paper") {
            computerScore++;
            return alert("You lose! Scissors beats Paper.");
        }else if (humanChoice === "scissors") {
            humanScore++;
            return alert("You win! Scissors beats Paper.");
        }
    }
}
function playGame(){
    
    for (let i = 0; i < 5; i++) {
        alert("This is Round #"+(i+1))
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        alert("Computer Choice is " + computerSelection);
        playRound(humanSelection, computerSelection);
        console.log("Human Choice is " + humanSelection);
        console.log("Computer Choice is " + computerSelection);
        alert("Human Score is " +" "+ humanScore +" "+ "and " + "Computer Score is " +" "+ computerScore);
        console.log("Human Score is " +" "+ humanScore +" "+ "and " + "Computer Score is " +" "+ computerScore);
    }

    if (humanScore > computerScore) {
        alert("Congratulations, you won the game!");
        
    }else if (humanScore < computerScore) {
        alert("Sorry, you lost the game!");
    }else if (humanScore === computerScore) {
        alert("You tie the game with the Computer");
    }
    x = 0;
    while (x != 1) {
        let playAgain = prompt("Would you like to play again?, Type \"yes\" or \"no\"");
        playAgain.toLowerCase();
            if (playAgain === "yes") {
            alert("The new game will start now");  
            computerScore = 0;
            humanScore = 0;  
            return playGame()
        } else if (playAgain === "no") {
            alert("Thank's for playing!")
            computerScore = 0;
            humanScore = 0;  
            x = 1;
        }else{
            alert("Please, enter a valid choice")
        }
    }
    
}

playGame();


