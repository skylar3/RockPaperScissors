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
    }
    else if (humanChoice == "paper" && computerChoice == "rock")
    {
            console.log("the human wins paper beats rock")
    }
    else if (humanChoice == "scissors" && computerChoice == "paper")
        {
            console.log("the human wins scissors beats paper")
        }
        else if (humanChoice == "paper" && computerChoice == "scissors")
            {
                console.log("the computer wins scissors beats paper")
            }
}
console.log(playRound(getHumanChoice(), getComputerChoice()));