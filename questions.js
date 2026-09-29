const prompt = require('readline-sync'); 

/*
Problems with code 
-double incorrect after wrong answer 
-prints both correct and incorrect after correct answer 
-first question does not advance to the second question 
*/

let userChoice; 

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
            question: "What is a variable in programming?\n1. A programming naming convention\n2. A programmnig construct\n3. A function used to store blocks of code\n4. A container that is used to store values\n",
            questionChoices:[1,2,3,4],
            questionAnswer: 4
        }
    ]
};

function chooseCategory() 
{

    let category = prompt.questionInt("1.Computer Science\n2.Music\n3.General facts\nPlease choose a category for the quiz (1,2,3): "); 

    switch (category)
    {
        case 1:
            console.log(questions.computerScience[0].question);
            break;

        case 2:
            console.log(questions.music[0].question);
            break;
        
        case 3:
            console.log(questions.randomFacts[0].question);
            break;

        default:
            console.log("Invalid input"); 
    }


}

function askQuestion() 
{
    userChoice = prompt.questionInt("Please enter your answer: ");
}

function checkAnswer()
{
    if (userChoice == questions.computerScience[0].questionAnswer)
    {
        console.log("Correct");
    }
    else 
    {
        console.log("Incorrect!"); 
    }
    if (userChoice == questions.computerScience[1].questionAnswer)
    {
        console.log("Correct");
    }
    else
    {
        console.log("Incorrect!"); 
    }
}



chooseCategory(); 
askQuestion();
checkAnswer();

// Test initial code

// const questions = 
    // {
    //     ComputerScience: [  
    //         {
    //             question: "What does CPU stand for?\n1. Central processing unit\n2. Central power unit\n3. Central processor unit\n4. Central powering unit\n",
    //             questionchoices: [1,2,3,4],
    //             questionAnswer: 1
    //         }
    //    ]
    // };

    // console.log(questions.ComputerScience[0].question); 
    // let userChoice = prompt.questionInt("Please enter your answer: "); 

    // if (userChoice == questions.ComputerScience[0].questionAnswer)
    // {
    //     console.log("Correct");
    // }
    // else 
    // {
    //     console.log("Incorrect!"); 
    // }/





    // console.log(questions.computerScience[0].question); 


