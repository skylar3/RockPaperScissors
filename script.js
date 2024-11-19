let humanScore = 0;
let computerScore = 0;
function getComputerChoice()
{
    let rand = Math.floor(Math.random() * 2);
    if (rand == 0)
    {
        let choice = "rock";
        return choice;
    }
    else if (rand == 1)
    {
        let choice = "paper";
        return choice;
    }
    else if (rand == 2)
    {
        let choice = "scissors";
        return choice;
    }
}
function getHumanChoice()
{
    let choice = prompt("Choose Rock Paper or Scissors");
    choice.toLowerCase;
    return choice;

}

function playRound(humanChoice, computerChoice)
{
    if (humanChoice === computerChoice)
    {
        console.log("Tie!")
    }
    else if (humanChoice == "rock" && computerChoice == "paper")
    {
        console.log("the computer wins paper beats rock")
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock")
    {
            console.log("the human wins paper beats rock");
            humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper")
        {
            console.log("the human wins scissors beats paper")
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "scissors")
            {
                console.log("the computer wins scissors beats paper");
                computerScore++
            }

}

while (computerScore || humanScore < 5)
{
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(humanScore);

}
if (computerScore === 5)
{
    console.log("The computer wins");
}
else if (humanScore === 5)
{
    console.log("The human wins!");
}