const prompt = require('readline-sync'); 

// Players name, Main loop and player choice variables are stored
let playerName;
// Makes sure the main game loop is running (true means the quiz is running and is set to false inside the condition to end the loop)
let mainLoop = true; 

let playerChoice;

// Score that starts set at zero
let score = Number(0);

//Amount of score received depending on a correct answer
let plusScore = Number(1);

//Variable to store the users answer choice
let userChoice; 

//Variable for what question the user is currently on
let currentQuestion = 0; 

// Functions that asks and stores the players name
function playerNameSelection()
{
    playerName = prompt.question("Please enter your name: "); 
}

//Function that asks the user to input a number to either start or end the quiz
function mainMenu() 
{
    playerChoice = Number(prompt.question("-----------MAIN MENU-----------"+ "\nHey " + playerName + "!" +"\n\n1.Start Quiz\n2.End quiz!\n\n" + "Please select one of the choices above:"));
}

//This function will confirm the players choice to either to start playing or quit the game. It will continue to loop until a correct choice is made.
//True will be returned if the player wants to start the quiz
//False will be returned if the player wants to end the quiz
function startGame() 
{
    while (mainLoop)
        {
            // if 1 is selected the quiz begins
            if(playerChoice == 1)
            {
                // will keep asking the user for valid input (1 or 2)
                console.log( playerName + " continue to choose the category: "); 
               // sends the value true back to the variable mainLoop so the main game loop keeps running
                return true; 
            }
            // if 2 is selected the quiz will end 
            else if (playerChoice == 2)
            {
                console.log( playerName + " your choice is : End quiz!"); 
                // sends the value false back to the variable mainLoop so the main game loop gets terminated
                mainLoop = false;
                return false; 
            }
            // makes sure the player only enters 1 or 2 and if not asks them repetedly to enter a valid answer
            else
            {
                playerChoice = Number(prompt.question("Invalid input please try again please select an option (1 or 2): "));
                continue; 
            }
        }    
}

//An object containing the questions for computer science, music and random facts
const questions = 
{
    computerScience: 
    [  
        {
            question: "\nWhat does CPU stand for?\n1. Central processing unit\n2. Central power unit\n3. Central processor unit\n4. Central powering unit\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 1
        },
        {
            question: "\nWhat does RAM stand for?\n1. Random accessible memory\n2. Random additional memory\n3. Random access memory\n4. Random power memory\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 3
        },
        {
            question: "\nWhat best describes a variable in programming?\n1. A print statement\n2. A programming construct\n3. A function used to store blocks of code\n4. A container that is used to store values\n",
            questionChoices:[1,2,3,4],
            questionAnswer: 4
        },
        {
            question: "\nWhat is an algorithm?\n1. A programming naming convention\n2. A programming construct\n3. A problem\n4. A step by step process put together to solve a problem.\n",
            questionChoices:[1,2,3,4],
            questionAnswer: 4
        },
        {
            question:"\nWhat best describes what an int is?\n1.A string of characters\n2.A double\n3.A float\n4.A whole number\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 4
        }
    ],

    music:
    [
        {
            question: "\nWhich artist released the song “Pretty Young Thing”?\n1.Sabrina Carpenter\n2.Dolly Parton\n3.Michael Jackson\n4.The Beetles\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 3
        },
        {
            question: "\nWhich singer is referred to as the Queen of Pop?\n1.Mariah Carey\n2.Christina Aguilera \n3.Ariana Grande\n4.Madonna\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 4
        },
        {
            question: "\nWho is considered the Father of Music?\n1.Thomas Edison\n2.King Edward VII\n3.Tupac\n4.Johann Bach\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 4
        },
        {
            question: "\nHow many members were in the boy band One Direction?\n1. 6\n2. 10\n3. 5\n4. 2\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 3
        },
        {
            question: "\nWho wrote the musical The Phantom of the Opera?\n1.Lin Manuel Miranda\n2.Jorge Rivera-Herrans\n3.Andrew Lloyd-Webber\n4.Winnie Holzman\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 3
        }
    ],

    randomFacts: 
    [
        {
            question: "\nHow many hearts does an octopus have?\n1. 3\n2. 7\n3. 1\n4. 0\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 1
        },
        {
            question: "\nWhat was Robert Gordon University before it became a educational institute?\n1. An opera hall\n2. A mansion\n3. A hospital\n4. A club\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 3
        },
        {
            question: "\nWhat is the hardest natural substance on Earth?\n1. Granite\n2.Diamonds\n3.Gold\n4.Titanium\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 2
        },
        {
            question: "\nIn Hamilton, where does Alexander Hamilton meet the Schuyler Sisters?\n1. A ballroom\n2. A pub\n3. The Schuyler Mansion\n4. The street\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 1
        },
        {
            question: "\nWho was the partner of Odysseus/ Ulysses ?\n1. Calypso\n2. Circe\n3. Eurylochus\n4. Penelope\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 4
        }
    ]
};

// Function that will ask the user to choose a category
function chooseCategory() 
{

    let category = prompt.questionInt("1.Computer Science\n2.Music\n3.General facts\nPlease choose a category for the quiz (1,2,3): "); 
    // this while loop will keep asking the player for valid input if invalid input is entered
    while (category != 1 && category !=2 && category !=3)
    {
        category = prompt.questionInt("Invalid choice. Please enter either 1 or 2 or 3: "); 
    }

    return category;

}
//This function displays all of the questions based on the category selected
function askQuestion(category) 
{
    // This switch is responsible for choosing the category of questions that should be displayed
    switch(category)
    {
        // category 1 is computer science
        case 1: 
        console.log(questions.computerScience[currentQuestion].question);
        break; 
        // category 2 is music
        case 2: 
        console.log(questions.music[currentQuestion].question); 
        break; 
        // category 3 is general facts
        case 3: 
        console.log(questions.randomFacts[currentQuestion].question);
        break; 
    }

    // THis will be asking the player to enter their answer and Number() will be converting the users input from a string data type to a integer/number data type 
    userChoice = Number(prompt.question("Please enter your answer: "));
    
}


// This function checks the answer and if correct, displays a message and adds score. If not, displays an incorrect message.
/* Menuka -- Decided to make a switch statement to check the answer rather than the if statement because of a bug where a question from another category
has the same answer as the question in the selected category thus making an answer that should be incorrect marked as correct.*/
function checkAnswer(category)
{
    // this switch will decide which categories answers are going to be checked 
    switch(category)
    {
        // Check computer science answers
        case 1:
        {
            if(userChoice == questions.computerScience[currentQuestion].questionAnswer) 
            {
                // this adds one point to the score if the answer is correct
                score += plusScore;
            }
            break; 
        }

        // Check music answers
        case 2: 
        {
            if (userChoice == questions.music[currentQuestion].questionAnswer)
            {
                // this adds one point to the score if the answer is correct
                score += plusScore;
            }
            break; 
        }

        // Check random facts answers
        case 3:
        {
            if (userChoice == questions.randomFacts[currentQuestion].questionAnswer)
            {
                // this adds one point to the score if the answer is correct
                score += plusScore;
            }
            break; 
        }
    }

}

// This is the main program loop that keeps the game running when the player chooses play again or quit 
while (mainLoop)
{
    //This function call will ask the player for their name 
    playerNameSelection();

    //This function call will display the main menu 
    mainMenu();

    //This function call (startGame()) and store its value true/false in the gameStarted variable
    let gameStarted = startGame();

    //The game progresses only if the player has chosen "Start quiz" which is option 1
    if(gameStarted)
    {
        // Asks the player what category they want for their quiz (computer science, music or random facts)
        let category = chooseCategory(); 

        //This while loop repeats all 5 of the questions until all 5 of the questions have been answered 
        while (currentQuestion < 5)
        {
            //This function call will be displaying the question 
            askQuestion(category);

            //This function call with check if the players answer is correct or incorrect 
            checkAnswer(category);
            
            //This will incremement the currentQuestion variable by 1 thus moving on to the next question 
            currentQuestion++;
        }
    
        //Object that contains name and final score
        let results = 
        {
            displayName: playerName,
            finalScore: score
        }

        //Displaying the name that the user inputted plus the final score
        console.log (results.displayName + (" your final score is: ") + results.finalScore + "/5");
        
        // This will ask if the player wants to play again for example a different category based quiz
        let choosePlayAgain = prompt.questionInt("\n1. Play again\n2. Quit\nSelect your choice: ");
        // When 2 is chosen the main game loop will stop
        if (choosePlayAgain == 2)
        {
            mainLoop = false;
        }
        else if (choosePlayAgain == 1) //When 1 is selected the quiz will be resetted and another round will start thus starting the loop all over again
        {
            currentQuestion = 0;
            score = 0; 
        }
    }

}
