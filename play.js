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

playerNameSelection();
mainMenu();
startGame(); 

// Score that starts set at zero
let score = Number(0);

//Amount of score recived depending on a correct answer
let plusScore = Number(1);

let userChoice; 
let currentQuestion = 0; 


const questions = 
{
    computerScience: 
    [  
        {
            question: "What does CPU stand for?\n1. Central processing unit\n2. Central power unit\n3. Central processor unit\n4. Central powering unit\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 1
        },
        {
            question: "What does RAM stand for?\n1. Random accessible memory\n2. Random additional memory\n3. Random access memory\n4. Random power memory\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 3
        },
        {
            question: "What best describes a variable in programming?\n1. A print statement\n2. A programming construct\n3. A function used to store blocks of code\n4. A container that is used to store values\n",
            questionChoices:[1,2,3,4],
            questionAnswer: 4
        },
        {
            question: "What is an algorithm?\n1. A programming naming convention\n2. A programming construct\n3. A problem\n4. A step by step process put together to solve a problem.\n",
            questionChoices:[1,2,3,4],
            questionAnswer: 4
        },
        {
            question:"What best describes what an int is?\n1.A string of characters\n2.A double\n3.A float\n4.A whole number\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 4
        }
    ],

    music:
    [
        {
            question: "Which artist released the song “Pretty Young Thing”?\n1.Sabrina Carpenter\n2.Dolly Parton\n3.Michael Jackson\n4.The Beetles\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 3
        },
        {
            question: "Which singer is referred to as the Queen of Pop?\n1.Mariah Carey\n2.Christina Aguilera \n3.Ariana Grande\n4.Madonna\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 4
        },
        {
            question: "Who is considered the Father of Music?\n1.Thomas Edison\n2.King Edward VII\n3.Tupac\n4.Johann Bach\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 3
        },
        {
            question: "How many members were in the boy band One Direction?\n1. 6\n2. 10\n3. 5\n4. 2\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 4
        },
        {
            question: "Who wrote the musical The Phantom of the Opera?\n1.Lin Manuel Miranda\n2.Jorge Rivera-Herrans\n3.Andrew Lloyd-Webber\n4.Winnie Holzman\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 3
        }
    ],

    randomFacts: 
    [
        {
            question: "How many hearts does an octopus have?\n1. 3\n2. 7\n3. 1\n4. 0\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 1
        },
        {
            question: "What was Robert Gordon University before it became a educational institute?\n1. An opera hall\n2. A mansion\n3. A hospital\n4. A club\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 3
        },
        {
            question: "What is the hardest natural substance on Earth?\n1. Granite\n2.Diamonds\n3.Gold\n4.Titanium\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 2
        },
        {
            question: "In Hamilton, where does Alexander Hamilton meet the Schuyler Sisters?\n1. A ballroom\n2. A pub\n3. The Schuyler Mansion\n4. The street\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 1
        },
        {
            question: "Who was the partner of Odysseus/ Ulysses ?\n1. Calypso\n2. Circe\n3. Eurylochus\n4. Penelope\n",
            questionChoices: [1,2,3,4],
            questionAnswer: 4
        }
    ]
};

function chooseCategory() 
{

    let category = prompt.questionInt("1.Computer Science\n2.Music\n3.General facts\nPlease choose a category for the quiz (1,2,3): "); 

    let categoryLoop = true;

    // This while loop will loop infinite a number of times until applicable input is entered!
    while (categoryLoop)
    {
        switch (category)
        {
            case 1:
            case 2:
            case 3:
                return category; 

            default:
            category = prompt.questionInt("Please enter 1 or 2 or 3: ");  
        }
        
    }

}

function askQuestion(category) 
{

    switch(category)
    {
        case 1: 
        console.log(questions.computerScience[currentQuestion].question);
        break; 

        case 2: 
        console.log(questions.music[currentQuestion].question); 
        break; 

        case 3: 
        console.log(questions.randomFacts[currentQuestion].question);
        break; 
    }
    userChoice = Number(prompt.question("Please enter your answer: "));
}

function checkAnswer()
{

    if (userChoice == questions.computerScience[currentQuestion].questionAnswer || userChoice == questions.music[currentQuestion].questionAnswer || userChoice == questions.randomFacts[currentQuestion].questionAnswer)
    {
        console.log("Correct");
        //The plusScore is added to score
        score = score += plusScore
    }
    else 
    {
        console.log("Incorrect!"); 
    }

}




let category = chooseCategory(); 


askQuestion(category);
checkAnswer();
currentQuestion++;


askQuestion(category);
checkAnswer();
currentQuestion++;


askQuestion(category); 
checkAnswer();
currentQuestion++;

askQuestion(category);
checkAnswer();


//Object that for name and final score
let results = {displayName: playerName,
    finalScore: score
}
//Displaying the name that the user inputted plus the final score
console.log (results.displayName + (" Your final score is: ") + results.finalScore);