

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);

    if(computerChoice == 1) {
        return "rock";
    }
    if(computerChoice == 2) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

function getHumanChoice() {
    let userPrompt = prompt("Pick your sign:\nRock\nPaper\nScissors");
    return userPrompt.toLowerCase();
}
console.log(getHumanChoice())