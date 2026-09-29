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
    playerChoice = prompt.question("-----------MAIN MENU-----------"+ "\nHey " + playerName + "!" +"\n\n1.Start Quiz\n2.End quiz!\n\n" + "Please select one of the choices above:");
    playerChoice = Number(playerChoice); // this is the start menu 
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
            else
            {
                console.log( playerName + " your choice is : End quiz!"); 
                break; 
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