let humanScore = 0;
let computerScore = 0;
let roundNumber =0;
let humanChoice ="";



const btns = document.querySelectorAll("button");

btns.forEach((button) =>
{
    button.addEventListener("click", () =>
    {

        humanChoice = button.id;
        let computerChoice = getComputerChoice();
        roundNumber ++;
        playRound(humanChoice, computerChoice);
        document.getElementById("computerScore").textContent = `Computer score: ${computerScore}`;
        document.getElementById("humanScore").textContent = `Human Score: ${humanScore}`;
        document.getElementById("roundNumber").textContent =  `Round Number: ${roundNumber}`;
        if (humanScore >4 || computerScore > 4)
            {
                document.getElementById("youWin").textContent = "Game Over!! Someone won";
                btns.forEach((button) =>
                {
                    button.remove();c
                })
            }


    })
});




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
function playRound(humanChoice, computerChoice)
{

    if (humanChoice === computerChoice)
    {
        alert("Tie!")
    }
    else if (humanChoice == "rock" && computerChoice == "paper")
    {
        alert("the computer wins paper beats rock")
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock")
    {
            alert("the human wins paper beats rock");
            humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper")
        {
            alert("the human wins scissors beats paper")
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "scissors")
            {
                alert("the computer wins scissors beats paper");
                computerScore++
            }
        };