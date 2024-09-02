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

    
    
    let humanChoice = prompt("What's your choice?","");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "paper" || humanChoice === "rock" || humanChoice === "scissors"){
        return humanChoice
    }else {
        alert("Enter a valid choice");
        //humanChoice = null;
        return getHumanChoice()
    }
    

}

console.log(getComputerChoice());
console.log(getHumanChoice());