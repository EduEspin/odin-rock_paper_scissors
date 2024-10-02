let humanScore = 0;
let computerScore = 0;
let humanChoice = "";

function getRandomNumber1to3(){
    const minNumber = Math.ceil(1);
    const maxNumber = Math.floor(3);
    return Math.floor(Math.random() * (maxNumber-minNumber + 1) + minNumber)
}

function getComputerChoice(){
    let randomNumber = getRandomNumber1to3();
    let computerChoice;
    
    if (randomNumber === 1){
        return computerChoice = "Rock"
    } else if (randomNumber === 2){
        return computerChoice = "Paper"
    }else if (randomNumber === 3) {
        return computerChoice = "Scissors"  
    } 
}

function humanButton(resolve) {
    const humanButton = document.querySelectorAll(".humanOption");
    humanButton.forEach((i)=>{
        i.addEventListener("click",()=>{
            humanChoice = i.textContent;
            document.querySelector("#humanChoice").innerHTML = humanChoice;
            //humanChoice.textContent = humanChoice.textContent.toLowerCase();
            resolve();
        });
    });
}

async function playButton(){
    return new Promise((resolve)=>{
        humanButton(resolve);
    });
}


/*function getHumanChoice(){  
    //let humanChoice = prompt("What's your choice? \"rock\", \"paper\" or \"scissors\"");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "paper" || humanChoice === "rock" || humanChoice === "scissors"){
        return humanChoice
    }else {
        alert("Please, enter a valid choice");
        //humanChoice = null;
        return getHumanChoice()
    }
}*/

function playRound(humanChoice,computerChoice) {

    if (humanChoice === computerChoice) {
        return document.querySelector("#roundWinner").innerHTML = "It's a Tie";    
    }else if ((humanChoice === "rock" || computerChoice === "rock") && (humanChoice === "paper" || computerChoice === "paper")) {
        if (humanChoice === "rock") {
            computerScore++;
            return document.querySelector("#roundWinner").innerHTML = "You lose! Paper beats Rock.";
        }else if (humanChoice === "paper") {
            humanScore++;
            return document.querySelector("#roundWinner").innerHTML = "You win! Paper beats Rock.";
        }
    } else if ((humanChoice === "rock" || computerChoice === "rock") && (humanChoice === "scissors" || computerChoice === "scissors")) {
        if (humanChoice === "scissors") {
            computerScore++;
            return document.querySelector("#roundWinner").innerHTML = "You lose! Rock beats Scissors.";
        }else if (humanChoice === "rock") {
            humanScore++;
            return document.querySelector("#roundWinner").innerHTML = "You win! Rock beats Scissors.";
        }
    } else if ((humanChoice === "paper" || computerChoice === "paper") && (humanChoice === "scissors" || computerChoice === "scissors")) {
        if (humanChoice === "paper") {
            computerScore++;
            return document.querySelector("#roundWinner").innerHTML = "You lose! Scissors beats Paper.";
        }else if (humanChoice === "scissors") {
            humanScore++;
            return document.querySelector("#roundWinner").innerHTML = "You win! Scissors beats Paper.";
            
        }
    }

}
async function playGame(){
    
    for (let i = 0; i < 5; i++) {
        document.querySelector("#roundNumber").innerHTML = "This is Round #"+(i+1);
        await playButton();
        let computerChoice = getComputerChoice();
        document.querySelector("#computerChoice").innerHTML = computerChoice;
        
        //const humanSelection = getHumanChoice();
        //const computerSelection = getComputerChoice();
        //alert("Computer Choice is " + computerSelection);
        playRound(humanChoice.toLowerCase(), computerChoice.toLowerCase());
        //console.log("Human Choice is " + humanSelection);
       // console.log("Computer Choice is " + computerSelection);
       //document.querySelector("#humanScore").innerHTML = ("Human Score is "+ humanScore);
       //document.querySelector("#computerScore").innerHTML = ("Computer Score is "+ computerScore);
       document.querySelector("#roundScore").innerHTML = "Human Score is " +" "+ humanScore +" "+ "and " + "Computer Score is " +" "+ computerScore;
        //alert("Human Score is " +" "+ humanScore +" "+ "and " + "Computer Score is " +" "+ computerScore);
        //console.log("Human Score is " +" "+ humanScore +" "+ "and " + "Computer Score is " +" "+ computerScore);
    }
    document.querySelector("#humanChoice").innerHTML = humanChoice;
    document.querySelector("#computerChoice").innerHTML = computerChoice;
    document.querySelector("#roundScore").innerHTML = "Human Score is " +" "+ humanScore +" "+ "and " + "Computer Score is " +" "+ computerScore;

    if (humanScore > computerScore) {
        alert("Congratulations, you won the game!");
        
    }else if (humanScore < computerScore) {
        alert("Sorry, you lost the game!");
    }else if (humanScore === computerScore) {
        alert("You tie the game with the Computer");
    }
    let x = 0;
    while (x != 1) {
        let playAgain = prompt("Would you like to play again?, Type \"yes\" or \"no\"");
        playAgain.toLowerCase();
            if (playAgain === "yes") {
            alert("The new game will start now");  
            computerScore = 0;
            humanScore = 0;  
            document.querySelector("#computerChoice").innerHTML = "";
            document.querySelector("#humanChoice").innerHTML = "";
            document.querySelector("#roundWinner").innerHTML = "";
            document.querySelector("#roundScore").innerHTML = "Human Score is " +" "+ humanScore +" "+ "and " + "Computer Score is " +" "+ computerScore;
            return playGame()
        } else if (playAgain === "no") {
            alert("Thank's for playing!")
            computerScore = 0;
            humanScore = 0; 
            document.querySelector("#computerChoice").innerHTML = "";
            document.querySelector("#humanChoice").innerHTML = "";
            document.querySelector("#roundWinner").innerHTML = "";
            document.querySelector("#roundScore").innerHTML = "Human Score is " +" "+ humanScore +" "+ "and " + "Computer Score is " +" "+ computerScore;
            x = 1;
        }else{
            alert("Please, enter a valid choice")
        }
    }
    
}

playGame();


