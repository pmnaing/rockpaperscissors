function playGame() {
    let humanScore = 0;
    let computerScore = 0;
  
    function getComputerChoice() {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
  
      if (computerChoice == 1) {
        return "rock";
      }
      if (computerChoice == 2) {
        return "paper";
      }
      else {
        return "scissors";
      }
    }
  
    function getHumanChoice() {
      let userPrompt = prompt("Pick your sign:\nRock\nPaper\nScissors");
      return userPrompt.toLowerCase();
    }
  
    function playRound(humanChoice, computerChoice) {
      const humanChoiceLower = humanChoice.toLowerCase();
  
      // Check for a tie
      if (humanChoiceLower === computerChoice) {
        console.log(`It is a tie! Both chose ${computerChoice}`);
        return;
      }
      
      // Check for winning conditions
      if (
        (humanChoiceLower === "rock" && computerChoice === "scissors") ||
        (humanChoiceLower === "paper" && computerChoice === "rock") ||
        (humanChoiceLower === "scissors" && computerChoice === "paper")
      ) {
        console.log(`You win! ${humanChoiceLower} beats ${computerChoice}`);
        humanScore++;
      } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoiceLower}`);
        computerScore++;
      }
    }
  
    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
      console.log(`Round ${i + 1}:`);
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
      console.log(`Current score - Human: ${humanScore}, Computer: ${computerScore}`);
      console.log("-----------------------");
    }
  
    // Declare the winner
    console.log("Game Over!");
    if (humanScore > computerScore) {
      console.log(`You win the game! Final score: You ${humanScore} - Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
      console.log(`You lose the game! Final score: You ${humanScore} - Computer ${computerScore}`);
    } else {
      console.log(`It's a tie! Final score: You ${humanScore} - Computer ${computerScore}`);
    }
  }
  
  // Start the game
  console.log(playGame());