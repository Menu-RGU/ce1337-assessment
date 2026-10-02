const prompt = require('readline-sync'); 

let playerName;
let mainLoop = true; 
let playerChoice;



function playerNameSelection()
{
    playerName = prompt.question("Please enter your name: "); 
}

function mainMenu() 
{
    playerChoice = Number(prompt.question("-----------MAIN MENU-----------"+ "\nHey " + playerName + "!" +"\n\n1.Start Quiz\n2.End quiz!\n\n" + "Please select one of the choices above:"));
}

function startGame(mainMenu) 
{
    while (mainLoop)
        {
            if(playerChoice == 1)
            {
                console.log( playerName + " continue to choose the category: "); 
                break;
            }
            else if (playerChoice == 2)
            {
                console.log( playerName + " your choice is : End quiz!"); 
                break; 
            }
            else
            {
                playerChoice = Number(prompt.question("Invalid input please try again please select an option (1 or 2): "));
                continue; 
            }
        }    
}

function chooseCategory() 
{

}

function askQuestion()
{

}

function showScore()
{

}

// main loop begins 

playerNameSelection();
mainMenu();
startGame(); 